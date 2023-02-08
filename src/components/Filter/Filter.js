import React from "react";
import { FilterBtn } from "../FilterBtn/FilterBtn";

export const Filter = () => {

const statusData =['Alive', 'Dead' ,'unknown']
const ganderData =['female', 'male', 'genderless' , 'unknown']
  return (
    <>
      <div>
        <h3 className="text-center "> Filter</h3>
        <p style={{cursor: "pointer"}} className="text-center text-primary text-decoration-underline">clear all</p>
  
  
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Felter by status
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        {
            statusData.map((item, index) => <FilterBtn name='status' text={item} index={index}/>)
        }
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Felter by species
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Felter by gender
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      {
            ganderData.map((item, index) => <FilterBtn  name='gander' text={item} index={index}/>)
        }
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
};
