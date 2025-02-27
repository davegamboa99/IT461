import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function DeleteDog() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const deleteDog = (id) =>
    axiosPrivate.delete(`/dogs/${id}`).then(() => {
      navigate("/dogs/");
    });
  const home = () => navigate("/dogs/");

  const { id } = useParams();
  return (
    <div>
      Do you want to delete?{" "}
      <div>
      <button
        onClick={() => {
          deleteDog(id);
        }}
      >
        Yes
      </button>
      <button onClick={home}>No</button>
      </div>
    </div>
  );
}