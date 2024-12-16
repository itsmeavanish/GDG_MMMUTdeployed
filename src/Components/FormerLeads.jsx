// import React, { useEffect, useState } from 'react';
// import formerLeadsData from './../utils/slidesData.json'; 


// const FormerLeads = () => {
//   const [formerLeads, setFormerLeads] = useState([]);

//   useEffect(() => {
//     setFormerLeads(formerLeadsData);
//   }, []);

//   return (
//     <div className="former-leads-container">
//       <h1 className="text-2xl font-semibold text-center mb-8">Former GDG Leads</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {formerLeads.map((lead, index) => (
//           <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//             <img
//               src={lead.image}
//               alt={lead.name}
//               className="w-full h-56 object-cover rounded-lg mb-4"
//             />
//             <h3 className="text-xl font-medium text-white">{lead.name}</h3>
//             <p className="text-sm text-gray-400 mt-2">{lead.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FormerLeads;


import React, { useEffect, useState } from 'react';
import formerLeadsData from './../utils/slidesData.json';

const FormerLeads = () => {
  const [formerLeads, setFormerLeads] = useState([]);

  useEffect(() => {
    // Load the JSON data into state
    setFormerLeads(formerLeadsData);
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl mb-6">Former GDG Leads</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {formerLeads.map((lead, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={lead.image} 
              alt={lead.name} 
              className="rounded-full w-32 h-32 object-cover mx-auto"
            />
            <h3 className="text-xl text-center font-medium text-white mt-4">{lead.name}</h3>
            <p className="text-sm text-gray-300 text-center mt-2">{lead.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormerLeads;
