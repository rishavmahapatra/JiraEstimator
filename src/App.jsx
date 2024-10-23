import React, { useState } from "react";
import TaskList from "./TaskList";
import PostStoryId from "./PostStoryId";
import StoryDesc from "./StoryDesc";
import { Button } from "./components/ui/button";

function App() {
  const [tasks, setTasks] = useState([]);
  const [storyDescription, setStoryDescription] = useState(null);
  const [storyID, setStoryId] = useState(null);

  const handleStorySubmit = (storyData) => {
    setTasks(storyData.subtasks);
    setStoryDescription(storyData.description);
    setStoryId(storyData.story_id);
  };

  const handleUpdateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
  };

  return (
    <div className="max-h-screen ">
      <h1 className='text-center font-extrabold text-3xl m-5'>Jira Estimator</h1>
      <div className="grid grid-cols-2 gap-3 mt-20">
      <div className="Left Column ">
      <PostStoryId onStorySubmit={handleStorySubmit} />
      {storyDescription && (<StoryDesc description={storyDescription}/>)}
      </div>
      <div className="Right Column">
      {tasks.length>0 && (<TaskList tasks={tasks} storyDescription={storyDescription} storyID={storyID} onUpdateTask={handleUpdateTask} />)}
      </div>
      </div>
      <h1 className='fixed left-0 right-0 bottom-0 text-center font-bold text-xl m-5'>Made with ❤️ by Rishav</h1>
    </div>
  );
}

export default App;
