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
  InputAdornment,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tooltip,
  CircularProgress,
  Typography,
  Checkbox,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as XLSX from "xlsx";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import api from "../../utils/axios";

const createData = (
  id,
  applicantName,
  email,
  mobileNumber,
  awardCategory,
  nominationDate,
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
  nominationDate,
  aboutCompany,
  website,
  aboutYourself,
  uniqueAchievement,
  claim,
  documents,
});

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [anchorElRow, setAnchorElRow] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]); // State to track selected rows
  const [selectedDocuments, setSelectedDocuments] = useState([]); // State to track selected documents
  const [openDocumentDialog, setOpenDocumentDialog] = useState(false); // State to track if the document dialog is open

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get("/auth/getRegister");
        console.log(response.data.data);
        const mappedData = response.data.data.map((item, index) =>
          createData(
            index + 1, // ID
            item.appName || "N/A",
            item.mail || "N/A",
            item.mobile || "N/A",
            item.awardCategory || "N/A",
            item.nominationDate || "N/A",
            item.companyAbout || "N/A",
            item.website || "N/A", // Assuming no website provided
            item.aboutYou || "N/A",
            item.achievement || "N/A",
            item.reasonClaim || "",
            item.files || []
          )
        );
        setRows(mappedData);
        setFilteredRows(mappedData);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const awardCategories = [
    "All",
    ...new Set(rows.map((row) => row.awardCategory)),
  ];

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    const filtered = rows.filter((row) => {
      const matchesSearch = Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      );
      const matchesCategory =
        selectedCategory === "All" || row.awardCategory === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredRows(filtered);
  }, [search, selectedCategory]);

  const handleChangePage = (event, newPage) => {
    setLoading(true);
    setPage(newPage);
    setTimeout(() => setLoading(false), 500); // Simulate loading delay
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const exportToExcels = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Nominations");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const exportToExcel = (rowData) => {
    const worksheet = XLSX.utils.json_to_sheet([rowData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applicant");
    XLSX.writeFile(workbook, `${rowData.applicantName}.xlsx`);
  };

  const handleRowMenuOpen = (event, rowId) => {
    setAnchorElRow((prev) => ({
      ...prev,
      [rowId]: event.currentTarget,
    }));
  };

  const handleRowMenuClose = (rowId) => {
    setAnchorElRow((prev) => ({
      ...prev,
      [rowId]: null,
    }));
  };

  const handleReadMoreClick = (content) => {
    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDocumentClick = (documents) => {
    setSelectedDocuments(documents);
    setOpenDocumentDialog(true);
  };

  const handleCloseDocumentDialog = () => {
    setOpenDocumentDialog(false);
  };

  const truncateToOneWord = (text) => {
    const firstWord = text.split(" ")[0];
    return `${firstWord}...`;
  };

  const handleSelectRow = (event, row) => {
    if (event.target.checked) {
      setSelectedRows((prev) => [...prev, row]);
    } else {
      setSelectedRows((prev) =>
        prev.filter((selectedRow) => selectedRow.id !== row.id)
      );
    }
  };

  const handleSelectAllRows = (event) => {
    if (event.target.checked) {
      setSelectedRows(filteredRows);
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflowX: "auto",
        marginTop: 10,
        backgroundColor: "#ecf7fc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 2,
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              "& .css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input:focus":
                {
                  borderColor: "transparent",
                  boxShadow: "none !important", // Remove border color on focus
                },
              "& .MuiInputBase-root.Mui-focused": {
                boxShadow: "none", // Remove box shadow on focus
                outline: "none", // Remove outline on focus
              },
            }}
          >
            <TextField
              id="outlined-basic"
              placeholder="Search..."
              variant="outlined"
              size="small"
              value={search}
              onChange={handleSearch}
              label="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: { xs: "100%", sm: "300px" },
              }}
            />
          </Box>

          <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
            <InputLabel htmlFor="category-select">Award Category</InputLabel>
            <Select
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="outlined"
              label="Award Category"
            >
              {awardCategories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="info"
            size="medium"
            onClick={() => exportToExcels(filteredRows, "FilteredNominations")}
          >
            Export Filtered to Excel
          </Button>

          <Button
            variant="contained"
            color="info"
            size="medium"
            onClick={() => exportToExcels(selectedRows, "SelectedNominations")}
            disabled={selectedRows.length === 0}
          >
            Export Selected to Excel
          </Button>
        </Box>

        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <CircularProgress />
          </Box>
        ) : filteredRows.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px",
            }}
          >
            <Typography>No records found</Typography>
          </Box>
        ) : (
          <>
            <Box sx={{ overflowX: "auto" }}>
              <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead sx={{ backgroundColor: "primary.main" }}>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="default"
                          indeterminate={
                            selectedRows.length > 0 &&
                            selectedRows.length < filteredRows.length
                          }
                          checked={
                            filteredRows.length > 0 &&
                            selectedRows.length === filteredRows.length
                          }
                          onChange={handleSelectAllRows}
                        />
                      </TableCell>
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
                        Nomination Date
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
                        File
                      </TableCell>
                      <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <TableRow key={row.id}>
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={selectedRows.some(
                                (selectedRow) => selectedRow.id === row.id
                              )}
                              onChange={(event) => handleSelectRow(event, row)}
                            />
                          </TableCell>
                          <TableCell>{row.applicantName}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.mobileNumber}</TableCell>
                          <TableCell>{row.awardCategory}</TableCell>
                          <TableCell>{row.nominationDate}</TableCell>
                          <TableCell>
                            {truncateToOneWord(row.aboutCompany)}
                            <Button
                              onClick={() =>
                                handleReadMoreClick(row.aboutCompany)
                              }
                            >
                              Read more
                            </Button>
                          </TableCell>
                          <TableCell>{row.website}</TableCell>
                          <TableCell>
                            {truncateToOneWord(row.aboutYourself)}
                            <Button
                              onClick={() =>
                                handleReadMoreClick(row.aboutYourself)
                              }
                            >
                              Read more
                            </Button>
                          </TableCell>
                          <TableCell>
                            {truncateToOneWord(row.uniqueAchievement)}
                            <Button
                              onClick={() =>
                                handleReadMoreClick(row.uniqueAchievement)
                              }
                            >
                              Read more
                            </Button>
                          </TableCell>
                          <TableCell>
                            {truncateToOneWord(row.claim)}
                            <Button
                              onClick={() => handleReadMoreClick(row.claim)}
                            >
                              Read more
                            </Button>
                          </TableCell>
                          <TableCell>
                            {row.documents.length > 0 ? (
                              <IconButton
                                onClick={() =>
                                  handleDocumentClick(row.documents)
                                }
                              >
                                <InsertDriveFileIcon
                                  sx={{ color: "primary.main" }}
                                />
                              </IconButton>
                            ) : (
                              <Typography>No Documents</Typography>
                            )}
                          </TableCell>
                          <TableCell>
                            <IconButton
                              onClick={(event) =>
                                handleRowMenuOpen(event, row.id)
                              }
                            >
                              <MoreVertIcon />
                            </IconButton>
                            <Menu
                              anchorEl={anchorElRow[row.id]}
                              open={Boolean(anchorElRow[row.id])}
                              onClose={() => handleRowMenuClose(row.id)}
                            >
                              <MenuItem onClick={() => exportToExcel(row)}>
                                <InsertDriveFileIcon />
                                Export to Excel
                              </MenuItem>
                            </Menu>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Details</DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
      </Dialog>

      <Dialog open={openDocumentDialog} onClose={handleCloseDocumentDialog}>
        <DialogTitle>Documents</DialogTitle>
        <DialogContent>
          {selectedDocuments.map((doc, index) => {
            const fileName = doc.split("/").pop();
            return (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", mb: 1 }}
              >
                <Tooltip title={fileName}>
                  <a
                    href={`/${doc}`}
                    download={fileName}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InsertDriveFileIcon
                      sx={{ marginRight: "5px", color: "primary.main" }}
                    />
                  </a>
                </Tooltip>
                <Typography>{fileName}</Typography>
              </Box>
            );
          })}
        </DialogContent>
      </Dialog>
    </Paper>
  );
};

export default DataTable;
