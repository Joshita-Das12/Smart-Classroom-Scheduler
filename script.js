const { useState } = React;
const { createRoot } = ReactDOM;

function App() {
  const [page, setPage] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "book", label: "Book a Classroom", icon: "📚" },
    { id: "schedule", label: "Schedule", icon: "🗓" },
    { id: "manage", label: "Manage Rooms", icon: "🏢" },
    { id: "bookings", label: "My Bookings", icon: "📖" },
    { id: "profile", label: "Profile", icon: "👤" },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8">Smart Scheduler</h1>
        <nav className="space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`flex items-center w-full px-3 py-2 rounded-lg transition ${
                page === item.id ? "bg-indigo-900" : "hover:bg-indigo-600"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        {/* Home */}
        {page === "home" && (
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0">
              <img
                src="https://i.postimg.cc/zXtTDXbj/1.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeSlide"
              />
              <img
                src="https://i.postimg.cc/FHwccWxk/modern-classroom.jpg"
                className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeSlide delay-[5s]"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to Smart Scheduler 🎓</h1>
              <p className="text-lg mb-6">Plan. Book. Manage. All in one place.</p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setPage("book")}
                  className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Book a Room
                </button>
                <button
                  onClick={() => setPage("schedule")}
                  className="px-5 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700"
                >
                  View Schedule
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Book a Classroom */}
        {page === "book" && (
          <div className="bg-white p-6 rounded-lg shadow max-w-lg">
            <h2 className="text-2xl font-bold mb-4">📚 Book a Classroom</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Classroom</label>
                <select className="w-full border rounded p-2">
                  <option>Room A</option>
                  <option>Room B</option>
                  <option>Room C</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Date</label>
                <input type="date" className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block mb-1">Time Slot</label>
                <select className="w-full border rounded p-2">
                  <option>9:00 AM - 11:00 AM</option>
                  <option>11:00 AM - 1:00 PM</option>
                  <option>2:00 PM - 4:00 PM</option>
                </select>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Book Now
              </button>
            </form>
          </div>
        )}

        {/* Schedule */}
        {page === "schedule" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">🗓 Schedule</h2>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Room</th>
                  <th className="p-2 border">Time</th>
                  <th className="p-2 border">Booked By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">2025-09-01</td>
                  <td className="p-2 border">Room A</td>
                  <td className="p-2 border">9:00 - 11:00 AM</td>
                  <td className="p-2 border">John</td>
                </tr>
                <tr>
                  <td className="p-2 border">2025-09-01</td>
                  <td className="p-2 border">Room B</td>
                  <td className="p-2 border">11:00 - 1:00 PM</td>
                  <td className="p-2 border">Alice</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Manage Rooms */}
        {page === "manage" && (
          <div className="bg-white p-6 rounded-lg shadow max-w-lg">
            <h2 className="text-2xl font-bold mb-4">🏢 Manage Rooms</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Room Name</label>
                <input type="text" placeholder="Enter room name" className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block mb-1">Capacity</label>
                <input type="number" placeholder="Enter capacity" className="w-full border rounded p-2" />
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Add Room
              </button>
            </form>

            <h3 className="text-xl font-bold mt-6 mb-2">Available Rooms</h3>
            <ul className="list-disc pl-6">
              <li>Room A - Capacity 30</li>
              <li>Room B - Capacity 40</li>
              <li>Room C - Capacity 50</li>
            </ul>
          </div>
        )}

        {/* My Bookings */}
        {page === "bookings" && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">📖 My Bookings</h2>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Room</th>
                  <th className="p-2 border">Time</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">2025-09-02</td>
                  <td className="p-2 border">Room C</td>
                  <td className="p-2 border">2:00 - 4:00 PM</td>
                  <td className="p-2 border text-green-600 font-semibold">Confirmed</td>
                </tr>
                <tr>
                  <td className="p-2 border">2025-09-05</td>
                  <td className="p-2 border">Room A</td>
                  <td className="p-2 border">9:00 - 11:00 AM</td>
                  <td className="p-2 border text-yellow-600 font-semibold">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Profile */}
        {page === "profile" && (
          <div className="bg-white p-6 rounded-lg shadow max-w-lg">
            <h2 className="text-2xl font-bold mb-4">👤 Profile</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1">Full Name</label>
                <input type="text" placeholder="Enter your name" className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block mb-1">Password</label>
                <input type="password" placeholder="Enter new password" className="w-full border rounded p-2" />
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
                Update Profile
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
