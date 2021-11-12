
import React from 'react'

export default function Order(props){
    // const {
    //     values,
    //     submit,
    //     change,
    //     disabled,
    //     errors,
    // } = props

    // const onSubmit = evt => {
    //     evt.preventDefault()
    //     submit()
    // }

    // const onChange = evt => {
    //     const { name, value, checked, type} = evt.target
    //     const valueToUse = type === 'checkbox' ? checked : value
    //     change(name, valueToUse)
    // }
    
    return (
    <form className='pizza-order' id='pizza-form'>

        {/* <div>{errors.name}</div>
        <div>{errors.size}</div>
        <div>{errors.special}</div> */}
        <h1>Build your own pizza</h1>
    <label>Name
        <input 
            //value={values.name}
            //onChange={onChange}
            type='text'
            name='name'
        />  
    </label>
    <label>Size
        <select
            name='size'
            //onChange={onChange}
            //value={values.size}
            id='size-dropdown'
        >
            <option value=''>-Select an option</option>
            <option value='small'>Small</option>
            <option value='medium'>medium</option>
            <option value='large'>Large</option>
        </select>
    </label>
    <h4>Toppings</h4>
    <label>Cheese:
        <input
            id='name-input'
            type='checkbox'
            name='cheese'
            //onChange={onChange}
            //checked={values.cheese}
        />
     </label>
     <label>Sausage:
        <input 
            type='checkbox'
            name='sausage'
            //onChange={onChange}
            //checked={values.sausage}
        />
    </label>
    <label>Pepperoni:
        <input 
            type='checkbox'
            name='pepperoni'
            //onChange={onChange}
            //checked={values.pepperoni}
        />
    </label>
    <label>Bacon:
        <input
            type='checkbox'
            name='bacon'
           // onChange={onChange}
            //checked={values.bacon}
        />
    </label>
    <label>Special Instructions:
        <input
            //value={values.special}
            //onChange={onChange}
            type='text'
            name='special'
            id='special-text'
        />
    </label>
<button id='order-button'>Submit Order</button>

    </form>
    )
}