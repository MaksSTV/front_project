import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

const tg = window.Telegram.WebApp;

const Delivery = function(){

    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [subject, setSubject] = useState('physical')
    const [zone, setZone] = useState('Zone I')

    const onSendData = useCallback(() =>{
        const data = {
            type: "delivery",
            street,
            house
        }
        tg.sendData(JSON.stringify(data))
    }, [street, house])

    useEffect(() =>{
        tg.onEvent('mainButtonClicked', onSendData)
        return()=>{
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!street || !house){
            tg.MainButton.hide();
        }
        else{
            tg.MainButton.show();
        }
    }, [street, house])

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeHouse = (e) => {
        setHouse(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    const onChangeZone = (e) => {
        setZone(e.target.value)
    }
      
    return (
        <div className="container__delivery">
        <div className="content__delivery">
            <div className="content__text-delivery">
                <h1 className="title__delivery">Доставка</h1>
                <p className="text__delivery">
                Заполните поля ниже, чтобы мы знали, куда доставлять продукты.<br/>
                <br/> Также учтите, что время ожидания зависит от зоны доставки:<br/><br/><br/><br/>
                Зона I: 30-45 минут.<br/>
                Зона II: 60-90 минут.<br/>
                Зона III: 120+ минут.
                </p>
                <div className={"form"}>
            
                    <select value={zone} onChange={onChangeZone} className={'select'}>
                        <option value={'first__zone'}>Зона I</option>
                        <option value={'second__zone'}>Зона II</option>
                        <option value={'third__zone'}>Зона III</option>
                    </select>
                    <input
                        className={'input'}
                        type="text"
                        placeholder={'Улица'}
                        value={street}
                        onChange={onChangeStreet}
                    />
                    <input
                        className={'input'}
                        type="text"
                        placeholder={'Дом'}
                        value={house}
                        onChange={onChangeHouse}
                    />
                    <select value={subject} onChange={onChangeSubject} className={'select'}>
                        <option value={'physical'}>Физ. лицо</option>
                        <option value={'legal'}>Юр. лицо</option>
                    </select>
                </div>
            </div>
            <div className="img__delivery"></div>
        </div>
    </div>
    );
}

export default Delivery