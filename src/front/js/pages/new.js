import React, { useState, useEffect, useContext } from "react";
import { Container, Form, Row, Nav, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaListUl } from 'react-icons/fa';
import { Context } from "../store/appContext";

export const New = () => {
  const { store, actions } = useContext(Context);

  const { register, formState: { errors }, watch, handleSubmit } = useForm();

  const onSubmit = (data) => {
      console.log(data);
  }

  return (
    <div>
      <h1 style={{marginTop: 60, textAlign: 'center', fontWeight: 'bolder'}}><span style={{color: 'limegreen'}}>Choose </span><span style={{color: 'yellowgreen'}}>your </span><span style={{color: 'forestgreen'}}>orchard  </span><FaListUl style={{color: 'darkgreen'}} /></h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-row d-flex mb-3">
          <div class="form-group col-6">
            <label style={{fontWeight: 'bold'}}>Location:</label>
            <div>
              <input
                className="form-control"
                type="text"
                {...register('Country', {
                  required: true,
                  maxLength: 20
                })}
                placeholder="Your country"
              />
              {errors.Country?.type === 'required' && <p style={{color: 'red', fontSize: 'small'}}>Country field is required...</p>}
              {errors.Country?.type === 'maxLength' && <p style={{color: 'red', fontSize: 'small'}}>Country field needs less than 20 letters...</p>}
            </div>
          </div>

          <div class="form-group col-6 px-4">
            <label></label>
            <div>
              <input
                className="form-control"
                type="text"
                {...register('City', {
                  required: true,
                  maxLength: 20
                })}
                placeholder="Your city"
              />
              {errors.City?.type === 'required' && <p style={{color: 'red', fontSize: 'small'}}>City field is required...</p>}
              {errors.City?.type === 'maxLength' && <p style={{color: 'red', fontSize: 'small'}}>City field needs less than 20 letters...</p>}
            </div>
          </div>
        </div>

        <div class="form-row d-flex mb-3">
          <div class="form-group col-6">
            <label style={{fontWeight: 'bold'}}>Level:</label>
            <select {...register('Level', {
              required: true
            })} className="form-control">
              <option value="">Pick a level...</option>
              <option value="Tutorial">Tutorial</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Difficult">Difficult</option>
            </select>
            {errors.Level?.type === 'required' && <p style={{color: 'red', fontSize: 'small'}}>Level field is required...</p>}
          </div>

          <div class="form-group col-6 px-4">
            <label style={{fontWeight: 'bold'}}>Type:</label>
            <select {...register('TypeofOrchard', {
              required: true
            })} className="form-control">
              <option value="">Pick an orchard...</option>
              <option value="Vertical">Vertical</option>
              <option value="Hanging">Hanging</option>
              <option value="Pallet">Pallet</option>
              <option value="Pot">Pot</option>
              <option value="Box">Box</option>
            </select>
            {errors.TypeofOrchard?.type === 'required' && <p style={{color: 'red', fontSize: 'small'}}>Type of Orchard field is required...</p>}
          </div>
        </div>


        <div>
          <label style={{fontWeight: 'bold'}}>Starting Date:</label>
          <div>
            <input type="date" {...register('StartingDate', {
              required: true
            })}></input>
            {errors.StartingDate?.type === 'required' && <p style={{color: 'red', fontSize: 'small'}}>Starting Date field is required...</p>}
          </div>
        </div>

        <h6 style={{marginTop: 18, fontWeight: 'bold'}}>Vegetables:</h6>
        <div className="form-control" style={{width:1090}}>
        <div>
          
        <label for="mynumber">Number of Crops:</label>
          <div>
          <input  {...register('NumbofVegsCrops', {
            required: true
          })} type="number" min={0} max={15} style={{width:125, textAlign: 'center'}}/>
          {errors.NumbofVegsCrops?.type === 'required' && <p style={{color: 'red', fontSize: 'small'}}>Number of Vegs Crops field is required...</p>}
          </div>

          <label style={{marginTop: 15}}>Types:</label>
          <div>
            
            <input {...register('Purple Cabbage')}  style={{ marginRight: 5 }} type="checkbox" name="Purple Cabbage" value="yes" />
            <label style={{ marginRight: 15 }}>Purple Cabbage</label>
            <input {...register('Onions')}  style={{ marginRight: 5 }} type="checkbox" name="Onions" value="yes" />
            <label style={{ marginRight: 15 }}>Onions</label>
            <input {...register('Potatoes')}  style={{ marginRight: 5 }} type="checkbox" name="Potatoes" value="yes" />
            <label style={{ marginRight: 15 }}>Potatoes</label>
            <input {...register('Cherry Tomatoes')}  tyle={{ marginRight: 5 }} type="checkbox" name="Cherry Tomatoes" value="yes" />
            <label style={{ marginRight: 15 }}>Cherry Tomatoes</label>
            <input {...register('Mushrooms')}  style={{ marginRight: 5 }} type="checkbox" name="Mushrooms" value="yes" />
            <label style={{ marginRight: 15 }}>Mushrooms</label>
            <input {...register('Butter Lettuce')}  style={{ marginRight: 5 }} type="checkbox" name="Butter Lettuce" value="yes" />
            <label style={{ marginRight: 15 }}>Butter Lettuce</label>
            <input {...register('Endive Lettuce')}  style={{ marginRight: 5 }} type="checkbox" name="Endive Lettuce" value="yes" />
            <label style={{ marginRight: 15 }}>Endive Lettuce</label>
            <input {...register('Green Beans')}  style={{ marginRight: 5 }} type="checkbox" name="Green Beans" value="yes" />
            <label style={{ marginRight: 15 }}>Green Beans</label>
          </div>

          <div>
            <input {...register('Mustard Greens')}  style={{ marginRight: 5 }} type="checkbox" name="Mustard Greens" value="yes" />
            <label style={{ marginRight: 15 }}>Mustard Greens</label>
            <input {...register('Carrot')}  style={{ marginRight: 5 }} type="checkbox" name="Carrot" value="yes" />
            <label style={{ marginRight: 21 }}>Carrot</label>
            <input {...register('Broccoli')}  style={{ marginRight: 5 }} type="checkbox" name="Broccoli" value="yes" />
            <label style={{ marginRight: 20 }}>Broccoli</label>
            <input {...register('Sweet Peppers')}  style={{ marginRight: 5 }} type="checkbox" name="Sweet Peppers" value="yes" />
            <label style={{ marginRight: 15 }}>Sweet Peppers</label>
          </div>
        </div>
        </div>





        <h6 style={{marginTop: 15, fontWeight: 'bold'}}>Herbs:</h6>
        <div className="form-control" style={{width:1090}}>
        <div>
          
          <label for="mynumber">Number of Crops:</label>
          <div>
          <input  {...register('NumbofHerbsCrops', {
            required: true
          })} type="number" min={0} max={15} style={{width:125, textAlign: 'center'}}/>
          {errors.NumbofHerbsCrops?.type === 'required' && <p style={{color: 'red', fontSize: 'small'}}>Number of Herbs Crops field is required...</p>}
          </div>

          <label style={{marginTop: 15}}>Types:</label>
          <div>
            <input {...register('Basil')}  style={{ marginRight: 5 }} type="checkbox" name="Basil" value="yes" />
            <label style={{ marginRight: 15 }}>Basil</label>
            <input {...register('Cilantro')}  style={{ marginRight: 5 }} type="checkbox" name="Cilantro" value="yes" />
            <label style={{ marginRight: 15 }}>Cilantro</label>
            <input {...register('Dill')}  style={{ marginRight: 5 }} type="checkbox" name="Dill" value="yes" />
            <label style={{ marginRight: 15 }}>Dill</label>
            <input {...register('Mint')}  style={{ marginRight: 5 }} type="checkbox" name="Mint" value="yes" />
            <label style={{ marginRight: 15 }}>Mint</label>
            <input {...register('Oregano')}  style={{ marginRight: 5 }} type="checkbox" name="Oregano" value="yes" />
            <label style={{ marginRight: 15 }}>Oregano</label>
            <input {...register('Parsley (Curly)')}  style={{ marginRight: 5 }} type="checkbox" name="Parsley (Curly)" value="yes" />
            <label style={{ marginRight: 15 }}>Parsley (Curly)</label>
            <input {...register('Parsley (Italian)')}  style={{ marginRight: 5 }} type="checkbox" name="Parsley (Italian)" value="yes" />
            <label style={{ marginRight: 15 }}>Parsley (Italian)</label>
            <input {...register('Rosemary')}  style={{ marginRight: 5 }} type="checkbox" name="Rosemary" value="yes" />
            <label style={{ marginRight: 15 }}>Rosemary</label>
            <input {...register('Arugula')}  style={{ marginRight: 5 }} type="checkbox" name="Arugula" value="yes" />
            <label style={{ marginRight: 15 }}>Arugula</label>
            <input {...register('Thyme')}  style={{ marginRight: 5 }} type="checkbox" name="Thyme" value="yes" />
            <label style={{ marginRight: 21 }}>Thyme</label>
            <input {...register('Ginger')}  style={{ marginRight: 5 }} type="checkbox" name="Ginger" value="yes" />
            <label style={{ marginRight: 20 }}>Ginger</label>
          </div>

          <div>
          <input {...register('Sage Grass')} style={{ marginRight: 5 }} type="checkbox" name="Sage Grass" value="yes" />
            <label style={{ marginRight: 15 }}>Sage Grass</label>
          </div>
        </div>
        </div>



        <h6 style={{marginTop: 15, fontWeight: 'bold'}}>Flowers:</h6>
        <div className="form-control" style={{width:1090}}>
        <div>
          
          <label for="mynumber">Number of Crops:</label>
          <div>
          <input {...register('NumbofFlowersCrops', {
            required: true
          })} type="number" min={0} max={15} style={{width:125, textAlign: 'center'}}/>
          {errors.NumbofFlowersCrops?.type === 'required' && <p style={{color: 'red', fontSize: 'small'}}>Number of Flowers Crops field is required...</p>}
          </div>

          <label style={{marginTop: 15}}>Types:</label>
          <div>
            <input {...register('Nasturtium')}  style={{ marginRight: 5 }} type="checkbox" name="Nasturtium" value="yes" />
            <label style={{ marginRight: 15 }}>Nasturtium</label>
            <input {...register('Cosmos')}  style={{ marginRight: 5 }} type="checkbox" name="Cosmos" value="yes" />
            <label style={{ marginRight: 15 }}>Cosmos</label>
            <input {...register('Calendula')}  style={{ marginRight: 5 }} type="checkbox" name="Calendula" value="yes" />
            <label style={{ marginRight: 15 }}>Calendula</label>
            <input {...register('Tagetes')}  style={{ marginRight: 5 }} type="checkbox" name="Tagetes" value="yes" />
            <label style={{ marginRight: 15 }}>Tagetes</label>
            <input {...register('Tansy')}  style={{ marginRight: 5 }} type="checkbox" name="Tansy" value="yes" />
            <label style={{ marginRight: 15 }}>Tansy</label>
            <input {...register('Bee Palm')}  style={{ marginRight: 5 }} type="checkbox" name="Bee Palm" value="yes" />
            <label style={{ marginRight: 15 }}>Bee Palm</label>
            <input {...register('Comfrey')}  style={{ marginRight: 5 }} type="checkbox" name="Comfrey" value="yes" />
            <label style={{ marginRight: 20 }}>Comfrey</label>
            <input {...register('Borage')}  style={{ marginRight: 5 }} type="checkbox" name="Borage" value="yes" />
            <label style={{ marginRight: 15 }}>Borage</label>
            <input {...register('Common Yarrow')}  style={{ marginRight: 5 }} type="checkbox" name="Common Yarrow" value="yes" />
            <label style={{ marginRight: 15 }}>Common Yarrow</label>
            <input {...register('Zinnia')}  style={{ marginRight: 5 }} type="checkbox" name="Zinnia" value="yes" />
            <label style={{ marginRight: 15 }}>Zinnia</label>
          </div>

          <div>
            <input {...register('Sunflower Maximilian')}  style={{ marginRight: 5 }} type="checkbox" name="Sunflower Maximilian" value="yes" />
            <label style={{ marginRight: 32 }}>Sunflower Maximilian</label>
            <input {...register('Yellow Camamilla')}  style={{ marginRight: 5 }} type="checkbox" name="Yellow Camamilla" value="yes" />
            <label style={{ marginRight: 21 }}>Yellow Camamilla</label>
          </div>
        </div>
        </div>
        <div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 25}}>
        <input style={{backgroundColor: 'brown', color: 'white', fontWeight: 'bold'}} type="submit" value="Create New Orchard" />
        </div>
        <p style={{color: 'white'}}>Country: {watch('Country')}</p>
      </form>
    </div>
  );
};
