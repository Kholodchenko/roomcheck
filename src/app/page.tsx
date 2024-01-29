import { Button, FormControl, FormHelperText, FormLabel, Input, TextField } from "@mui/material";
import "./style.scss";
import ChildCareIcon from '@mui/icons-material/ChildCare';

export default function Home() {
  return (
    <main className="container">
        <div className="cont-div">
          <h2 className="cont-h2">
           Первоначальый вариант авторизации через телефон
          </h2>
          <TextField className="cont-txt" id="outlined-basic" label="Телефон" variant="outlined" />
          <Button className="cont-btn">
            Войти по почте
          </Button>
        </div>
        <div className="cont-div">
          <h2 className="cont-h2">
           Если выбрал @email
          </h2>
          <TextField className="cont-txt" id="outlined-basic" label="Введите email" variant="outlined" />
          <Button className="cont-btn">
            Отправить письмо
          </Button>
        </div>
        <div className="cont-div">
          <h2 className="cont-h2">
            После того как пришел письмо появляется поле код
          </h2>
          <TextField className="cont-txt" id="outlined-basic" label="Введите код" variant="outlined" />
          <Button className="cont-btn">
            Войти
          </Button>
        </div>
        <div className="cont-br"></div>
        <h2>Здесь личный кабинет тип</h2>
        <div className="cont-div">
          <h2 className="cont-h2">
            Профиль
          </h2>
          <ChildCareIcon className="svgg"/>
          <span>Фото профиля</span>
          <FormControl style={{margin: '20px'}}>
            <FormLabel>Имя</FormLabel>
            <Input placeholder="Placeholder" value={'Михаил'}/>
          </FormControl>
          <FormControl style={{margin: '20px'}}>
            <FormLabel>Фамилия</FormLabel>
            <Input placeholder="Placeholder" value={'Петрушкин'}/>
          </FormControl>
          <FormControl style={{margin: '20px'}}>
            <FormLabel>Дата рождения</FormLabel>
            <Input placeholder="Placeholder" value={'01.01.1996'}/>
          </FormControl>
          <FormControl style={{margin: '20px'}}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Placeholder" value={'Петрушкин@email.ru'}/>
          </FormControl>
          <FormControl style={{margin: '20px'}}>
            <FormLabel>Фамилия</FormLabel>
            <Input placeholder="Placeholder" value={'Петрушкин'}/>
          </FormControl>
          <FormControl style={{margin: '20px'}}>
            <FormLabel>Telephone</FormLabel>
            <Input placeholder="Placeholder" value={'89999999999'}/>
          </FormControl>
        </div>
    </main>
  );
}
