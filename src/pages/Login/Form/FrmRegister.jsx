import React from 'react'
import { Grid} from '@mui/material'
import useForm from '../../../utils/useForm';
import FrmGenericInput from './FrmGenericInput';
import { Controls } from '../../../Components/controls/Control';

const initialFValues = {
  id: 0,
  userName:'',
  password:'',
  cnfmpwd:'',
}

const FrmRegister = () => {

    const {values, setValues, handleChanges}= useForm(initialFValues);

    return (
        <FrmGenericInput>
              <Controls.InputOutLined
                name="userName"
                label="User Name"
                value={values.userName}
                onChange={handleChanges}
              />
              <Controls.InputOutLined
                label="Password"
                name='password'
                value={values.password}
                onChange={handleChanges}
              />
        </FrmGenericInput>

    )
}

export default FrmRegister