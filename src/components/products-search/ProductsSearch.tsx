import React, {SyntheticEvent, useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import {CircularProgress, TextField} from "@mui/material";
import axios from "axios";
import {API_URL} from "@/utils/interceptors/interceptors.ts";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {Product} from "@/viewes/products-buyer/components/ProductPage.tsx";

export default function ProductsSearch() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Product[]>([]);
  const loading = open && options.length === 0;
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (_event: SyntheticEvent<Element, Event>, newValue: string) => {
    setInputValue(newValue)
    searchProductHandler(newValue);
  }

  const searchProductHandler = async (value: string) => {
    if(value) {
      try {
        const response = await axios.get(`${API_URL}/search?query=${value}`);
        console.log(response.data)
        setOptions(response.data.products || []);
      } catch (e) {
        toast.error(`Item does not exist!`);
      }
    }
  };

  return (
    <Autocomplete
      id="products-search"
      sx={{ width: 550 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      // isOptionEqualToValue={(option, value) => option.title === value.title}
      // getOptionLabel={(option) => option.title}

      // I need options by product_name
      options={options}
      loading={loading}
      getOptionLabel={(item: Product) => {
        return item.product_name;
      }}
      getOptionKey={(item: Product) => {
        return item._id;
      }}
      onChange={(_event, item: Product | null) => {
        if(item?._id){
          navigate(`/product-page/${item._id}`);
        }
      }}
      renderInput={(params) => {
        return <TextField
          {...params}
          label="Search product"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      }}
    />
  )
}