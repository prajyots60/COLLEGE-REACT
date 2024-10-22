import TodoList from "../components/Testimonials";

const HomePage = () => {

  return (
     <div className=" z-10 px-4 py-16 flex flex-col justify-center items-center overflow-hidden">
       <div className=" mx-auto  ">
      <h1 className="text-gray-300 font-serif text-center mt-10">
        Welcome to VESIT
      </h1>
      
       </div>
      
      <div className="mx-auto mt-16  justify-center  ">
      <TodoList />
      </div>

       
     </div>
  );
}

export default HomePage;