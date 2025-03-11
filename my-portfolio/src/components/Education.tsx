import gordonCollegeLogo from "../assets/GordonCollege.png";

export default function Education() {
  return (
    <section id="education" className="p-10 bg-gray-100 dark:bg-gray-800 text-black">
        <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
        
        <div className="flex flex-col items-center bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md max-w-3xl mx-auto">
          {/* Logo & Text Wrapper */}
          <div className="flex flex-col items-center space-y-4">
            <img src={gordonCollegeLogo} alt="Gordon College Logo" className="w-20 h-20" />
            <h3 className="text-xl font-semibold">Gordon College</h3>
            <p className="text-gray-700 dark:text-gray-300">B.S. in Computer Science, Minor in Data Science & Music</p>
            <p className="text-gray-600 dark:text-gray-400">Dean’s List, Presidential Honors, Rowing Team</p>
          </div>

          {/* Relevant Courses */}
          <div className="mt-6 w-full">
            <h3 className="text-lg font-semibold text-center">Relevant Courses:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-center">
              <li>Internet Programming</li>
              <li>Machine Learning</li>
              <li>Software Engineering Project I & II</li>
              <li>Database Systems</li>
            </ul>
          </div>

          {/* Extracurricular Activities as Badges */}
          <div className="flex space-x-4 mt-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Rowing Team</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Symphonic Band</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Gospel Choir</span>
          </div>
        </div>
      </section>
  );
}
