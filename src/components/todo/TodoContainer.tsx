import { useAppSelector } from "@/redux/hooks/hooks";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  //locat
  // const { todos } = useAppSelector((state) => state.todos);

  //server
  const { data: todos, error, isLoading } = useGetTodosQuery(undefined);
  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  console.log(todos);
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <TodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data?.map((item: any) => (
            <TodoCard key={item._id} {...item} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center">
          <p>There is no task panding</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
