import React, { FC } from "react";
import ICategory from "../../interfaces/ICategory";
import Category from "../Category";
import { NavWrapper } from "./index.styles";

interface IProps {
  categories: ICategory[];
}

const Navbar: FC<IProps> = ({ categories }: IProps) => {
  return (
    <NavWrapper>
      {categories &&
        categories.map((category, index) => {
          return (
            <Category
              key={index}
              name={category.name}
              slug={category.slug}
              child={category.child || []}
            />
          );
        })}
    </NavWrapper>
  );
};

export default Navbar;
