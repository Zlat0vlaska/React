import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function PostFilter({ filter, setFilter }) {

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder='Поиск...' />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Сортировка'
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                ]}
            />
            {/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Сортировка</InputLabel>
                <Select
                    labelId="demo-simple-select-label"

                    value={filter.sort}

                    onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                >
                    <MenuItem value='title'>По названию</MenuItem>
                    <MenuItem value='description'>По описанию</MenuItem>
                </Select>
            </FormControl> */}

        </div>
    );
}   
