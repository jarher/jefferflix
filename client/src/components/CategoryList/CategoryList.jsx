import styled from "styled-components";
import {
  body_big,
  body_small,
  color_black,
  color_gray_lighter,
  color_primary,
} from "../UI/variables";
import ButtonStyle from "../Button/Button";
import { Link } from "react-router-dom";
import { createVideo, deleteCategory, deleteVideo, updateVideoList } from "../../Api/Api";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const HeaderCell = styled.div`
  font-family: "Roboto-Regular";
  font-size: ${body_big};
  color: ${color_gray_lighter};
  border-left: 4px solid ${color_primary};
  padding: 1%;
  width: 16.6%;
  box-sizing: border-box;
  &:nth-child(1) {
    border: none;
  }
`;
const CategoryTable = styled.div`
  display: none;
  margin-top: 20px;
  min-width: 710px;
  border: 4px solid ${color_primary};
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 710px;
  }
`;
const CategoryHeader = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 4px solid ${color_primary};
`;
const CategoryNameHeader = styled(HeaderCell)``;
const CategoryDescriptionHeader = styled(HeaderCell)`
  width: 50%;
`;
const CategoryEditHeader = styled(HeaderCell)``;
const CategoryBody = styled.div`
  border-left-width: 4px;
  border-right-width: 4px;
  border-bottom-width: 4px;
`;
const CategoryRow = styled.div`
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  width: 100%;
`;
const CategoryCol = styled.div`
  color: ${color_gray_lighter};
  font-size: ${body_small};
  width: 16.6%;
  padding: 1%;
  box-sizing: border-box;
  border-left: 5px solid ${color_black};
  border-top: 5px solid ${color_black};
  border-bottom: 5px solid ${color_black};
  display: flex;
  align-items: center;
  &:nth-child(1) {
    border-left: none;
  }
`;
const CategoryDesc = styled(CategoryCol)`
  width: 50%;
`;
const ButtonEdit = styled(ButtonStyle)`
  background-color: transparent;
  color: ${color_gray_lighter};
  width: 100%;
`;

const Content = ({ name, desc, id }) => {
  const { set_Toast_Message, video_List_Context } = useContext(DataContext);
  
  const delCat = async () => {
    try {
      // const delCat = await deleteCategory(`/categories/${id}`);
      // const videoRes = await createVideo("/videoList", videoList);
      const videoList = video_List_Context.filter((video) => video.category !== name);
      const res = await deleteVideo("/videoList"); 
      console.log(res);
      // if (delCat.status === 200) {
      //   set_Toast_Message({ value: "Categoría eliminada", success: true });
      // }
    } catch {
      // set_Toast_Message({
      //   value: "Error de conexión al servidor",
      //   success: false,
      // });
    }
  };
  return (
    <CategoryRow>
      <CategoryCol>{name}</CategoryCol>
      <CategoryDesc>{desc}</CategoryDesc>
      <CategoryCol>
        <ButtonEdit>
          <Link to={`/newCategory/${id}/edit`}>Editar</Link>
        </ButtonEdit>
      </CategoryCol>
      <CategoryCol>
        <ButtonEdit onClick={delCat}>Eliminar</ButtonEdit>
      </CategoryCol>
    </CategoryRow>
  );
};

const CategoryList = ({ catList }) => {
  return (
    <CategoryTable>
      <CategoryHeader>
        <CategoryNameHeader>Nombre</CategoryNameHeader>
        <CategoryDescriptionHeader>Descripción</CategoryDescriptionHeader>
        <CategoryEditHeader>Editar</CategoryEditHeader>
        <CategoryEditHeader>Eliminar</CategoryEditHeader>
      </CategoryHeader>
      <CategoryBody>
        {catList.map((cat) => (
          <Content
            name={cat.title}
            desc={cat.desc}
            id={cat.id}
            delCat={cat.delCat}
            key={cat.id}
          />
        ))}
      </CategoryBody>
    </CategoryTable>
  );
};

export default CategoryList;
