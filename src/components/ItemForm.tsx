import React from "react";

type IProps = {
  title: string;
  name: string;
  type: string;
  weight: number;
  color: string;
  active: boolean;
  ean: number;
  editItem: boolean;

  handleChange: (e: any) => void;
  handleCheckboxChange: (e: any) => void;
  changeItem: (e: any) => void;
  addItem: (e: any) => void;
};

const ItemForm: React.SFC<IProps> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <form>
        <div className='form-group'>
          <input
            id='name'
            type='text'
            className='form-control'
            placeholder={props.name}
            required={!props.editItem}
            onChange={props.handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            id='type'
            type='text'
            className='form-control'
            placeholder={props.type}
            value={props.type}
            required={!props.editItem}
            onChange={props.handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            id='weight'
            type='number'
            className='form-control'
            placeholder={String(props.weight)}
            required={!props.editItem}
            onChange={props.handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            id='color'
            type='text'
            className='form-control'
            placeholder={props.color}
            required={!props.editItem}
            onChange={props.handleChange}
          />
        </div>
        <div className='form-group'>
          <input
            id='ean'
            type='number'
            className='form-control'
            placeholder={`${String(props.ean)} (Only numbers are allowed)`}
            required={!props.editItem}
            onChange={props.handleChange}
          />
        </div>

        <div className='form-check'>
          <input
            type='checkbox'
            className='form-check-input'
            id='active'
            checked={props.active}
            onChange={props.handleCheckboxChange}
          />
          <label className='form-check-label'>Active</label>
        </div>
        <button type='submit' className='btn btn-primary' onClick={props.editItem ? props.changeItem : props.addItem}>
          Save
        </button>
      </form>
    </div>
  );
};
export default ItemForm;