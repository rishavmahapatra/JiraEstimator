import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import { Label } from "./components/ui/label";
import { ScrollArea } from "./components/ui/scroll-area";

function TaskList({ tasks, onUpdateTask }) {
  const [editIndex, setEditIndex] = useState(null); // Track which task is being edited
  const [editedTask, setEditedTask] = useState({ task_name: "", estimation: "" });

  // Start editing a task
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  // Handle changes to the task fields during editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  // Save the edited task
  const handleSave = () => {
    onUpdateTask(editIndex, editedTask); // Call the parent function to update the task
    setEditIndex(null); // Exit edit mode
  };

  // Cancel editing and revert to the original values
  const handleCancel = () => {
    setEditIndex(null);
    setEditedTask({ task_name: "", estimation: "" });
  };

  return ( 
    <div className="task-list m-5 rounded-xl border-2 shadow-lg ">
         <ScrollArea className="p-3 h-96 overflow-hidden">
      {tasks.map((task, index) => (
        <Card key={index} className="m-3 p-3 bg-gradient-to-l from-[#a8ff78] to-[#78ffd6] shadow-lg">
          <CardContent>
            {editIndex === index ? (
              // Edit Mode
              <div className="grid gap-2">
                <Label htmlFor={`task_name_${index}`}>Task Name</Label>
                <Input
                  id={`task_name_${index}`}
                  name="task_name"
                  value={editedTask.subtask}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300"
                />
                <Label htmlFor={`estimation_${index}`}>Estimation</Label>
                <Input
                  id={`estimation_${index}`}
                  name="estimation"
                  type="number"
                  value={editedTask.estimation}
                  onChange={handleInputChange}
                  className="border-2 border-gray-300"
                />
                <div className="flex justify-between mt-3">
                  <Button onClick={handleSave} className="bg-green-500 text-white">Save</Button>
                  <Button onClick={handleCancel} className="bg-gray-500 text-white">Cancel</Button>
                </div>
              </div>
            ) : (
              // View Mode
              <div className="flex justify-between items-center ">
                <div>
                  <p><strong>Task:</strong> {task.subtask}</p>
                  <p><strong>Estimation:</strong> {task.estimation}</p>
                </div>
                <Button onClick={() => handleEdit(index)} className="bg-blue-500 text-white">Edit</Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </ScrollArea> 
    <Button className="m-5 mx-auto w-1/3 block">Save</Button>
    </div>
   
  );
}

export default TaskList;
