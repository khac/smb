import Logo from '../../assets/main-logo-modified.png';
import {useState, useRef, useEffect, useMemo} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import parse from 'autosuggest-highlight/parse';
import { debounce } from '@mui/material/utils';
import SearchIcon from '@mui/icons-material/Search';
import {GOOGLE_MAPS_API_KEY} from '../../constants/api_key';
import Login from '../Login';
import SignUp from '../SignUp';
import saveSearchQuery from '../../mongodb/InsertSearchQuery'

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const GoogleMaps = ({className, value, setValue}) => {
    // const [value, setValue] = useState(null);

    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);
    const loaded = useRef(false);
  
    if (typeof window !== 'undefined' && !loaded.current) {
      if (!document.querySelector('#google-maps')) {
        loadScript(
          `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
          document.querySelector('head'),
          'google-maps',
        );
      }
  
      loaded.current = true;
    }
  
    const fetch = useMemo(
      () =>
        debounce((request, callback) => {
          autocompleteService.current.getPlacePredictions(request, callback);
        }, 400),
      [],
    );
  
    useEffect(() => {
      let active = true;
  
      if (!autocompleteService.current && window.google) {
        autocompleteService.current =
          new window.google.maps.places.AutocompleteService();
      }
      if (!autocompleteService.current) {
        return undefined;
      }
  
      if (inputValue === '') {
        setOptions(value ? [value] : []);
        return undefined;
      }
  
      fetch({ input: inputValue }, (results) => {
        if (active) {
          let newOptions = [];
  
          if (value) {
            newOptions = [value];
          }
  
          if (results) {
            newOptions = [...newOptions, ...results];
          }
  
          setOptions(newOptions);
        }
      });
  
      return () => {
        active = false;
      };
    }, [value, inputValue, fetch]);
  
    return (
      <Autocomplete
        id="google-map"
        sx={{ width: 300, height: 80 }}
        className = {className}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.description
        }
        filterOptions={(x) => x}
        options={options}
        autoComplete
        includeInputInList
        filterSelectedOptions
        value={value}
        noOptionsText="No locations"
        onChange={(event, newValue) => {
          setOptions(newValue ? [newValue, ...options] : options);
          setValue(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Select Location" fullWidth />
        )}
        renderOption={(props, option) => {
          const matches =
            option.structured_formatting.main_text_matched_substrings || [];
  
          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match) => [match.offset, match.offset + match.length]),
          );
  
          return (
            <li {...props}>
              <Grid container alignItems="center">
                <Grid item sx={{ display: 'flex', width: 44 }}>
                  <LocationOnIcon sx={{ color: 'text.secondary' }} />
                </Grid>
                <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                  {parts.map((part, index) => (
                    <Box
                      key={index}
                      component="span"
                      sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                    >
                      {part.text}
                    </Box>
                  ))}
                  <Typography variant="body2" color="text.secondary">
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
    );
  }



const SMBHeader = () => {
    const [value, setValue] = useState('');
    const [businessName, setbusinessName] = useState('');

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        if (value !== "" && businessName !== "") {
          console.log(value.description, businessName);
          saveSearchQuery(value.description, businessName);

        }
      }
    }
    
    return (
        <header className="AppHeader">
          <img src={Logo} className='logo-img' alt='Localfinder logo' />
          <div className='autocomplete'>
            <GoogleMaps 
                className={{class:'locationAutocomplete'}}
                value={value}
                setValue={setValue} 
            />
            <TextField 
                id="business" 
                sx={{ width: '400px', marginLeft: '20px' }} 
                label="Search for local business"  
                value={businessName}
                onChange={(event) => {
                  setbusinessName(event.target.value);
                }}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                }}
                onKeyDown={handleKeyDown}
            />
          </div>
          
          <Login />
          
          <SignUp />
        </header>
        
        
    );
}

export default SMBHeader;