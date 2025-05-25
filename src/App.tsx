import { useState } from 'react'
import './App.css'

/*
function App() {
  return(
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/home" element={<HomeView />>} />
        <Route path="/signUp" element={<SignUpView />>} />
        <Route path="/signIn" element={<SignInView />>} />
        <Route path="/calendar" element={<CalendarView />>} />
        <Route path="/tasks" element={<TasksView />>} />
        <Route path="/notes" element={<NotesView />>} />
        <Route path="/settings" element={<SettingsView />>} />
      </Routes>
    </div>
  )


}
  */

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 p-8">
      <h1 className="text-blue-600 text-4xl font-bold mb-4">
        ADHD Notes & Calendar App
      </h1>
      <p className="text-gray-700 text-lg bg-white p-4 rounded-lg shadow-md">
        Hello World! The app is working with Tailwind CSS.
      </p>
      <div className="mt-6 space-y-2">
        <div className="bg-red-500 text-white p-3 rounded">Priority 1 - Urgent</div>
        <div className="bg-yellow-500 text-white p-3 rounded">Priority 2 - Important</div>
        <div className="bg-green-500 text-white p-3 rounded">Priority 3 - Normal</div>
        <div className="bg-blue-500 text-white p-3 rounded">Priority 4 - Low</div>
      </div>
    </div>
  )
}

export default App
