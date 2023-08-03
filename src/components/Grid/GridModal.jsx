import { useState } from "react";
import { GridItems } from "./GridItems";
import { bb_1, bb_2, bb_3, cup_1, cup_2, cup_3, cup_4, cup_5 } from '../../../public'


export const GridModal = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
            <GridItems image={ bb_1 } title="Bebetiburon" description="Aportando su grano de arena"/>
            <GridItems image={ bb_2 } title="Bebetiburon" description="Fijando su objetivo"/>
            <GridItems image={ bb_3 } title="Bebetiburon" description="Cumpliendo la misión"/>
            <GridItems image={ cup_5 } title="Cupcake" description="Red Velvet"/>
            <GridItems image={ cup_2 } title="Cupcakes" description="Para días especiales"/>
            <GridItems image={ cup_1 } title="Cupcakes" description="Para toda ocasión"/>
            <GridItems image={ cup_3 } title="Cupcake" description="Chocolate"/>
            <GridItems image={ cup_4 } title="Cupcake" description="Red Velvet con choco"/>            
        </div>
    </div>
  )
}
