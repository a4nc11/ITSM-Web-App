// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ticketTitle, setTicketTitle] = useState("");
  const [tickets, setTickets] = useState([]);

  // Fetch tickets if logged in
  useEffect(() => {
    if (user) {
      fetchTickets();
    }
  }, [user]);

  const fetchTickets = async () => {
    const ticketsCol = collection(db, "tickets");
    const ticketSnapshot = await getDocs(ticketsCol);
    const ticketList = ticketSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTickets(ticketList);
  };

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const handleSubmitTicket = async () => {
    if (!ticketTitle) return;
    await addDoc(collection(db, "tickets"), {
      title: ticketTitle,
      status: "Pending",
      userEmail: user.email
    });
    setTicketTitle("");
    fetchTickets();
  };

  if (!user) {
    // Login / Signup Page
    return (
      <div className="App">
        <h2>ITSM Web App</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h2>Welcome, {user.email}</h2>
      <button onClick={handleLogout}>Logout</button>

      <h3>Submit Ticket</h3>
      <input
        type="text"
        placeholder="Ticket Title"
        value={ticketTitle}
        onChange={e => setTicketTitle(e.target.value)}
      />
      <button onClick={handleSubmitTicket}>Submit</button>

      <h3>All Tickets</h3>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            {ticket.title} - {ticket.status} - {ticket.userEmail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
