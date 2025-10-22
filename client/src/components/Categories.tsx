import React from 'react'
import { FaUmbrellaBeach } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { IoHomeOutline } from 'react-icons/io5';

const Categories = () => {
  return (
     <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12 overflow-x-auto">
      <CategoryItem name="Beach" icon={FaUmbrellaBeach} />
      <CategoryItem name="Villas" icon={LuBuilding2} />
      <CategoryItem name="Cabins" icon={GiWoodCabin} />
      <CategoryItem name="Tiny Homes" icon={IoHomeOutline
} />
    </div>
  )
}

export default Categories

type CategoryItemProps = {
  name: string;
  icon: React.ElementType
}

const CategoryItem = ({name, icon: Icon} : CategoryItemProps) => {
  return (
    <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
      <Icon size={24} />
      <span className='text-xs'>{name}</span>
    </div>
  )
}
