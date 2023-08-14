// import { useState } from "react";

// export default function Form() {
//   const [answer, setAnswer] = useState("");
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState("typing");

//   if (status === "success") {
//     return <h1>That's right!</h1>;
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus("submitting");
//     try {
//       await submitForm(answer);
//       setStatus("success");
//     } catch (err) {
//       setStatus("typing");
//       setError(err);
//     }
//   }
//   function handleTextareaChange(e) {
//     setAnswer(e.target.value);
//   }
//   return (
//     <>
//       <h2>City quiz</h2>
//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={answer}
//           onChange={handleTextareaChange}
//           disabled={status === "submitting"}
//         />
//         <br />
//         <button disabled={answer.length === 0 || status === "submitting"}>
//           Submit
//         </button>

//         {error !== null && <p className="Error">{error.message}</p>}
//       </form>
//     </>
//   );
// }

// function submitForm(answer) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let shouldError = answer.toLowerCase() !== "lima";
//       if (shouldError) {
//         reject(new Error("Good guess but a wrong answer.Try again"));
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// }

//3

// import { useState } from "react";

// export default function Clock({ color, time }) {
//   return <h1 style={{ color: color }}>{time}</h1>;
// }

//4
// import { useState } from "react";

// export default function Form() {
//   const [firstName, setFirstName] = useState(" ");
//   const [lastName, setLastName] = useState(" ");

//   const fullName = firstName + " " + lastName;

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <h2>lets get you in</h2>
//       <label>
//         First name: <input value={firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name: <input value={lastName} onChange={handleLastNameChange} />
//       </label>
//       <p>
//         Your ticket will be issued as: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }

//5
// import { useState } from "react";
// import Chat from "./Chat";
// import ContactList from "./ContactList";

// export default function Messenger() {
//   const [to, setTo] = useState(Contacts[0]);
//   return (
//     <div>
//       <ContactList
//         Contacts={Contacts}
//         selectedContact={to}
//         onSelect={(Contact) => setTo(Contact)}
//       />
//       <Chat Contact={to} />
//     </div>
//   );
// }

// const Contacts = [
//   { name: "Abhi", email: "abhi@mail.com" },
//   { name: "Manisha", email: "manisha@mail.com" },
//   { name: "Elvish", email: "elvish@mail.com" },
// ];

//6
// import { useReducer } from "react";
// import AddTask from "./AddTask";
// import TaskList from "./TaskList";

// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

//   function handleAddTask(text) {
//     dispatch({
//       type: "added",
//       id: nextId++,
//       text: text,
//     });
//   }

//   function handleChangeTask(task) {
//     dispatch({
//       type: "changed",
//       task: task,
//     });
//   }

//   function handleDeleteTask(taskId) {
//     dispatch({
//       tyoe: "deleted",
//       id: taskId,
//     });
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// function tasksReducer(tasks, action) {
//   switch (action.type) {
//     case "added": {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case "changed": {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case "deleted": {
//       return tasks.filter((t) => t.id !== action.id);
//     }
//     default: {
//       throw Error("Unknown action:" + action.type);
//     }
//   }
// }

// let nextId = 3;
// const initialTasks = [
//   { id: 0, text: "Abhi", done: true },
//   { id: 1, text: "Shiva", done: false },
//   { id: 2, text: "Manisha", done: false },
// ];

//7
// import AddTask from "./AddTask";
// import TaskList from "./TaskList";
// import { TasksProvider } from "./TaskContext";

// export default function TaskApp() {
//   return (
//     <TasksProvider>
//       <h1>Day off in tokyo</h1>
//       <AddTask />
//       <TaskList />
//     </TasksProvider>
//   );
// }

//8
// import { useRef } from "react";

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert("You clicked " + ref.current + " times!");
//   }

//   return <button onClick={handleClick}>Click me!</button>;
// }

//9
// import { useRef } from "react";

// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>Focus the input</button>
//     </>
//   );
// }

//10
// import { useState, useRef, useEffect } from "react";

// function VideoPlayer({ src, isPlaying }) {
//   const ref = useRef(null);

//   useEffect(() => {
//     if (isPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }, [isPlaying]);
//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <>
//       <center>
//         <button onClick={() => setIsPlaying(!isPlaying)}>
//           {isPlaying ? "Pause  " : "Play  "}
//         </button>
//       </center>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }

//11
// import { useState, useEffect } from "react";
// import { createConnection } from "./Chat";

// export default function Chatroom() {
//   useEffect(() => {
//     const connection = createConnection();
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the chat!</h1>;
// }

//12
// import { useState, useEffect } from "react";
// import { createConnection } from "./Chat";

// const serverUrl = "https://localhost:1234";

// function ChatRoom({ roomId }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);

//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// export default function App() {
//   const [roomId, setRoomId] = useState("general");
//   return (
//     <>
//       <label>
//         Choose the chat room:{" "}
//         <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <hr />
//       <ChatRoom roomId={roomId} />
//     </>
//   );
// }

//13
// import { useState, useEffect } from "react";
// import { createConnection, sendMessage } from "./Chat";

// const serverUrl = "https://localhost:1234";

// function ChatRoom({ roomId, theme }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.on("connected", () => {
//       showNotification("Connected!", theme);
//     });
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId, theme]);

//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// export default function App() {
//   const [roomId, setRoomId] = useState("general");
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <>
//       <label>
//         Choose the chat room:{" "}
//         <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={(e) => setIsDark(e.target.checked)}
//         />
//         Use dark theme
//       </label>
//       <hr />
//       <ChatRoom roomId={roomId} theme={isDark ? "dark" : "light"} />
//     </>
//   );
// }

//14
// import { usePointerPosition } from "./usePointerPosition";
// import { useDelayedValue } from "./useDelayedValue";

// export default function Canvas() {
//   const pos1 = usePointerPosition();
//   const pos2 = useDelayedValue(pos1, 100);
//   const pos3 = useDelayedValue(pos2, 200);
//   const pos4 = useDelayedValue(pos3, 100);
//   const pos5 = useDelayedValue(pos4, 50);

//   return (
//     <>
//       <Dot position={pos1} opacity={1} />
//       <Dot position={pos2} opacity={0.8} />
//       <Dot position={pos3} opacity={0.6} />
//       <Dot position={pos4} opacity={0.4} />
//       <Dot position={pos5} opacity={0.2} />
//     </>
//   );
// }

// function Dot({ position, opacity }) {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         backgroundColor: "pink",
//         borderRadius: "50%",
//         opacity,
//         transform: `translate(${position.x}px), ${position.y}px)`,
//         pointerEvents: "none",
//         left: -20,
//         top: -20,
//         width: 40,
//         height: 40,
//       }}
//     />
//   );
// }
