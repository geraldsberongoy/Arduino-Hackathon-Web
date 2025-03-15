import React from "react";

const users = [
  {
    name: "Hart Hagerty",
    country: "United States",
    job: "Desktop Support Technician",
    company: "Zemlak, Daniel and Leannon",
    favoriteColor: "Purple",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    name: "Brice Swyre",
    country: "China",
    job: "Tax Accountant",
    company: "Carroll Group",
    favoriteColor: "Red",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
  },
  {
    name: "Marjy Ferencz",
    country: "Russia",
    job: "Office Assistant I",
    company: "Rowe-Schoen",
    favoriteColor: "Crimson",
    avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
  },
  {
    name: "Yancy Tear",
    country: "Brazil",
    job: "Community Outreach Specialist",
    company: "Wyman-Ledner",
    favoriteColor: "Indigo",
    avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp",
  },
  {
    name: "Hart Hagerty",
    country: "United States",
    job: "Desktop Support Technician",
    company: "Zemlak, Daniel and Leannon",
    favoriteColor: "Purple",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    name: "Brice Swyre",
    country: "China",
    job: "Tax Accountant",
    company: "Carroll Group",
    favoriteColor: "Red",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
  },
  {
    name: "Marjy Ferencz",
    country: "Russia",
    job: "Office Assistant I",
    company: "Rowe-Schoen",
    favoriteColor: "Crimson",
    avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
  },
  {
    name: "Yancy Tear",
    country: "Brazil",
    job: "Community Outreach Specialist",
    company: "Wyman-Ledner",
    favoriteColor: "Indigo",
    avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp",
  },
  {
    name: "Hart Hagerty",
    country: "United States",
    job: "Desktop Support Technician",
    company: "Zemlak, Daniel and Leannon",
    favoriteColor: "Purple",
    avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    name: "Brice Swyre",
    country: "China",
    job: "Tax Accountant",
    company: "Carroll Group",
    favoriteColor: "Red",
    avatar: "https://img.daisyui.com/images/profile/demo/3@94.webp",
  },
  {
    name: "Marjy Ferencz",
    country: "Russia",
    job: "Office Assistant I",
    company: "Rowe-Schoen",
    favoriteColor: "Crimson",
    avatar: "https://img.daisyui.com/images/profile/demo/4@94.webp",
  },
  {
    name: "Yancy Tear",
    country: "Brazil",
    job: "Community Outreach Specialist",
    company: "Wyman-Ledner",
    favoriteColor: "Indigo",
    avatar: "https://img.daisyui.com/images/profile/demo/5@94.webp",
  },
];

const Table = () => {
  return (
    <div className="flex-1 w-full overflow-x-auto p-5 ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user.avatar} alt={`Avatar of ${user.name}`} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.country}</div>
                  </div>
                </div>
              </td>
              <td>
                {user.company}
                <br />
                <span className="badge badge-ghost badge-sm">{user.job}</span>
              </td>
              <td>{user.favoriteColor}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Table;
