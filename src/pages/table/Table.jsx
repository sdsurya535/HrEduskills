import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TextField,
  InputAdornment,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import * as XLSX from "xlsx";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const createData = (
  id,
  applicantName,
  email,
  mobileNumber,
  awardCategory,
  aboutCompany,
  website,
  aboutYourself,
  uniqueAchievement,
  claim,
  documents
) => ({
  id,
  applicantName,
  email,
  mobileNumber,
  awardCategory,
  aboutCompany,
  website,
  aboutYourself,
  uniqueAchievement,
  claim,
  documents,
});

const initialData = [
  createData(
    1,
    "John Doe",
    "johndoe@example.com",
    "+1234567890",
    "Best Innovator",
    "This company specializes in innovative tech solutions.",
    "https://company.com",
    "I am a software developer with 10 years of experience.",
    "Developed a cutting-edge AI algorithm.",
    "Claim your prize within 30 days.",
    ["document1.pdf", "document2.pdf"]
  ),
  // Add more rows as needed
];

const DataTable = () => {
  const [rows, setRows] = useState(initialData);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const filteredRows = initialData.filter(
      (row) =>
        row.applicantName.toLowerCase().includes(search.toLowerCase()) ||
        row.email.toLowerCase().includes(search.toLowerCase()) ||
        row.mobileNumber.includes(search) ||
        row.awardCategory.toLowerCase().includes(search.toLowerCase()) ||
        row.aboutCompany.toLowerCase().includes(search.toLowerCase()) ||
        row.website.toLowerCase().includes(search.toLowerCase()) ||
        row.aboutYourself.toLowerCase().includes(search.toLowerCase()) ||
        row.uniqueAchievement.toLowerCase().includes(search.toLowerCase()) ||
        row.claim.toLowerCase().includes(search.toLowerCase())
    );
    setRows(filteredRows);
  }, [search]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "table.xlsx");
  };

  const handleReadMoreClick = (content) => {
    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const truncateToOneWord = (text) => {
    const firstWord = text.split(" ")[0];
    return `${firstWord}...`;
  };

  return (
    <Paper sx={{ overflowX: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 2,
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="Search..."
          variant="standard"
          size="small"
          value={search}
          onChange={handleSearch}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              "&:before": { borderBottom: "none" },
              "&:hover:not(.Mui-disabled):before": { borderBottom: "none" },
              "&:after": { borderBottom: "none" },
            },
          }}
          sx={{
            width: { xs: "100%", sm: "300px" },
            outline: "none",
            "& .MuiInputBase-root": {
              outline: "none",
            },
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={exportToExcel}
          sx={{ ml: 2 }}
        >
          Export to Excel
        </Button>
      </Box>
      <TableContainer>
        <Table id="table-to-export">
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Applicant Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Mobile Number
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Award Category
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                About Company
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Website
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                About Yourself
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Unique Achievement
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Claim
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Documents
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "grey.100" : "white",
                  }}
                >
                  <TableCell>{row.applicantName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.mobileNumber}</TableCell>
                  <TableCell>{row.awardCategory}</TableCell>
                  <TableCell>
                    {truncateToOneWord(row.aboutCompany)}
                    <Button
                      size="small"
                      onClick={() => handleReadMoreClick(row.aboutCompany)}
                    >
                      Read More
                    </Button>
                  </TableCell>
                  <TableCell>
                    <a
                      href={row.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row.website}
                    </a>
                  </TableCell>
                  <TableCell>
                    {truncateToOneWord(row.aboutYourself)}
                    <Button
                      size="small"
                      onClick={() => handleReadMoreClick(row.aboutYourself)}
                    >
                      Read More
                    </Button>
                  </TableCell>
                  <TableCell>
                    {truncateToOneWord(row.uniqueAchievement)}
                    <Button
                      size="small"
                      onClick={() => handleReadMoreClick(row.uniqueAchievement)}
                    >
                      Read More
                    </Button>
                  </TableCell>
                  <TableCell>
                    {truncateToOneWord(row.claim)}
                    <Button
                      size="small"
                      onClick={() => handleReadMoreClick(row.claim)}
                    >
                      Read More
                    </Button>
                  </TableCell>
                  <TableCell>
                    {row.documents.map((doc, docIndex) => (
                      <IconButton
                        key={docIndex}
                        component="a"
                        href={`/${doc}`} // Adjust the path according to your needs
                        download
                        sx={{ marginRight: 1 }}
                      >
                        <InsertDriveFileIcon />
                      </IconButton>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={rows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Details</DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
      </Dialog>
    </Paper>
  );
};

export default DataTable;
