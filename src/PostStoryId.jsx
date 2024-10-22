import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { API_URL } from "./config";

function PostStoryId({ onStorySubmit }) {
  const [storyId, setStoryId] = useState("");
  const [error, setError] = useState(null);
  const handleInputChange = (e) => {
    setStoryId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous error

    try {
      // Fetch data from the server using the storyId
      const response = await fetch(`${API_URL}/story_id`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ story_id: storyId }),
      });
     

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      console.log("API response data:", data);
      onStorySubmit(data);
    } catch (err) {
      console.error("API fetch error:", err);
      setError("Failed to fetch data. Please check the story ID or try again later.");
    }
  };

  return (
    <div>
      <Card className="m-5 bg-gradient-to-l from-[#a8ff78] to-[#78ffd6]  shadow-lg">
        <CardContent>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
            <Label htmlFor="storyid">Story ID:</Label>
            <Input
              className="border border-black"
              id="storyid"
              type="text"
              value={storyId}
              onChange={handleInputChange}
              required
            />
            <Button className="w-1/2 mx-auto" type="submit">SUBMIT</Button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
}

export default PostStoryId;
