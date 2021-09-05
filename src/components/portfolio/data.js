export const data = [
  {
    id: 1,
    title: "Education",
    icon: "sources/mortarboard.png",
    description: "University of Connecticut",
    information: (
      <div className="rightContainer">
        <p className="desc">Expected B.S. in May 2022</p>
        <p className="desc">Major in Computer Science</p>
        <p className="desc">Minor in Mathematics</p>
        <h3>Certifications</h3>
        <p className="desc indent">
          CompTIA Security+ <span>(expected in August 2021)</span>
        </p>
        <p className="desc indent">
          CCNA <span>(expected in January 2022)</span>
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Work Experience",
    icon: "sources/portfolio.png",
    description: "Cisco Meraki",
    extra: "Software Engineer Intern",
    information: (
      <div className="rightContainer">
        <p className="desc">Built a project using Ruby on Rails</p>
        <p className="desc">
          Utilized the Jenkins API to retrieve test information
        </p>
        <p className="desc">
          Formulated solutions to problems using data structures and OOP
        </p>
        <p className="desc">
          Applied JQuery for responsiveness and additional functionality
        </p>
        <p className="desc">
          Used Git for version control and Jira for bug and progress tracking
        </p>
        <p className="desc">
          Implemented Docker for portability and consistency
        </p>
        <p className="desc">
          Integrated an external PostgreSQL database and configured a MongoDB
          database
        </p>
        <p className="desc">
          Incorporated Cron to periodically run a script that updates a local
          MongoDB database
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Technical Skills",
    icon: "sources/pencil.png",
    information: (
      <div className="rightContainer">
        <p className="desc">
          Strong understanding of Windows and Unix environments
        </p>
        <p className="desc">
          Hands on experience with Ruby, Python, C, and more
        </p>
        <p className="desc">
          Knowledge of data structures and algorithms
        </p>
        <p className="desc">
          Deep understanding of networking concepts (TCP/IP model, DNS, DHCP,
          NAT, BGP, etc.)
        </p>
        <p className="desc">Understanding of the OWASP Top Ten</p>
        <p className="desc">Knowledge of the MVC framework</p>
        <p className="desc">Hands on development with ReactJS</p>
      </div>
    ),
  },

  {
    id: 4,
    title: "Relevant Courses",
    icon: "sources/online-course.png",
    information: (
      <div className="rightContainer">
        <p className="desc">
          <a
            href="https://catalog.uconn.edu/directory-of-courses/course/cse/#3140"
            className="courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cybersecurity Lab
          </a>
        </p>
        <p className="desc">
          <a
            href="https://catalog.uconn.edu/directory-of-courses/course/cse/#3300"
            className="courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Computer Networks and Data Communication
          </a>
        </p>
        <p className="desc">
          <a
            href="https://catalog.uconn.edu/directory-of-courses/course/cse/#4300"
            className="courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Operating Systems
          </a>
        </p>
        <p className="desc">
          <a
            href="https://catalog.uconn.edu/directory-of-courses/course/cse/#3400"
            className="courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Computer and Network Security
          </a>
        </p>
        <p className="desc">
          <a
            href="https://catalog.uconn.edu/directory-of-courses/course/cse/#3500"
            className="courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Algorithms & Complexity
          </a>
        </p>
        <p className="desc">
          <a
            href="https://gradcatalog.uconn.edu/course-descriptions/course/CSE/#5095"
            className="courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Architecture of IoT
          </a>
        </p>
      </div>
    ),
  },

  {
    id: 5,
    title: "Extracurricular Activities",
    icon: "sources/network.png",
    information: (
      <div className="rightContainer">
        <p className="desc">
          Hackathon - UConn CyberSEED <span>(March 2021)</span>
        </p>
        <p className="desc">CTF Challenges</p>
        <p className="desc">Intramural Volleyball & Intramural Basketball</p>
        <h3>Clubs</h3>
        <p className="desc indent">
          UConn B.R.O.S. <span>(2019 to present)</span>
        </p>
        <p className="desc indent">
          UConn A.C.M <span>(2019 to present)</span>
        </p>
        <p className="desc indent">
          N.S.B.E <span>(2019 to 2020)</span>
        </p>
      </div>
    ),
  },
];
