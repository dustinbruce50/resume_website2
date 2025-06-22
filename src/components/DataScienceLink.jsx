import React from "react";
import { Link } from "react-router";

const DataScienceLink = () => {
  return (
    <div className="text-center font-bold text-3xl mt-4 mb-8">
      <Link to="/projects" className="text-slate-500 hover:underline" 
      >
      Check Out My Newest Data Science Projects Here!

      </Link>
        
      
    </div>
  );
};

export default DataScienceLink;

/**
 * className="text-center font-bold text-3xl mt-4"
 */
