import React, { FC } from "react";
import { DrowdownMenuStyled, NavLinkStyled } from "./index.styles";
import ICategory from "../../interfaces/ICategory";

interface IProps {
  name: string;
  slug: string;
  child: { name: string; slug: string; }[];
}
const Category: FC<IProps> = ({ name, slug, child }) => {
  const DropdownMenu = (categories: { name: string; slug: string; }[]) => {
    return (
      <DrowdownMenuStyled>
        {categories.map((category) => (
          <NavLinkStyled to={category.slug}>{category.name}</NavLinkStyled>
        ))}
      </DrowdownMenuStyled>
    );
  };

  return (
    <NavLinkStyled to={slug}>
      {name}
      {child.length > 0 && DropdownMenu(child)}
    </NavLinkStyled>
  );
};

export default Category;
