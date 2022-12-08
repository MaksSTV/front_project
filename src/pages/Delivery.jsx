const Delivery = function(){
      
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
            
                    <select  className={'select'}>
                        <option value={'first__zone'}>Зона I</option>
                        <option value={'second__zone'}>Зона II</option>
                        <option value={'third__zone'}>Зона III</option>
                    </select>
                    <input
                        className={'input'}
                        type="text"
                        placeholder={'Улица'}
                        /*value={country}
                        onChange={onChangeCountry}*/
                    />
                    <input
                        className={'input'}
                        type="text"
                        placeholder={'Дом'}
                        /*value={street}
                        onChange={onChangeStreet}*/
                    />
                    <select  className={'select'}>
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