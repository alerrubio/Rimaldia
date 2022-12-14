import "./css/UserProfile.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import Background from "/img/LOGIN.png"
import ThemeSettings from "../components/ThemeSet";
import EditUser from "../components/EditUser";
import CategoryDesc from "../components/CategoryDesc";
import CategoryInput from "../components/CategoryInput";

const Category = () => {
  
  return (
    <>
        <div className="mt-4">
          <CategoryInput></CategoryInput>
          <CategoryDesc nombre_categoria="Romántico" placeholder_textarea="Rímas con temática de amor"></CategoryDesc>
          <CategoryDesc nombre_categoria="Verso libre" placeholder_textarea="Escritura en tipo prosa"></CategoryDesc>
          <CategoryDesc nombre_categoria="Tristeza" placeholder_textarea="Rímas sobre el sentimiento de tristeza"></CategoryDesc>
          <CategoryDesc nombre_categoria="Motivacional" placeholder_textarea="Rímas con el propósito de motivar a los lectores"></CategoryDesc>
        </div>
    </>
  )

}
export default Category