import React from "react";
import styled from "styled-components";
import NativeSelect from "@mui/material/NativeSelect";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

export default function SearchBar() {
  return (
    <>
      <div style={{ margin: 130, padding: 30 }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {" "}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <NativeSelect
              defaultValue={"none"}
              inputProps={{
                name: "category",
                id: "uncontrolled-native",
              }}
            >
              <option value={"none"}>통합검색</option>
              <option value={"title"}>제목</option>
              <option value={"name"}>카페이름</option>
              <option value={"chapter"}>종류</option>
            </NativeSelect>
          </FormControl>
          <TextField id="standard-search" type="search" variant="standard" />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
      </div>
    </>
  );
}
