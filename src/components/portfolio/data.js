export const data = [
  {
    id: 1,
    title: "Education",
    icon: "sources/mortarboard.png",
    description: "University of Connecticut",
    information: (
      <div className="rightContainer">
        <p className="desc">Expected B.S. in May 2022</p>
        <p className="desc">Majored in Computer Science</p>
        <p className="desc indent">Concentration in Systems & Networks</p>
        <p className="desc">Minored in Mathematics</p>
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
    title: "Projects",
    icon: "sources/project-management.png",
    information: (
      <div className="rightContainer">
        <h3>
          COVID-19 Infection Rate Modeling <span>(2021 - present)</span>
        </h3>
        <p className="desc indent">
          Utilized Python to model COVID-19 infection rates using LSTMs.
        </p>

        <h3>
          Smart Home Application <span>(2021)</span>
        </h3>
        <p className="desc indent">
          Designed a web application using React Native, which allowed users to
          connect to a temperature and humidity monitoring system.
        </p>
      </div>
    ),
  },
  {
    id: 4,
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
          Knowledge of data structures and algorithms and their applications
        </p>
        <p className="desc">
          Deep understanding of networking concepts (TCP/IP model, DNS, DHCP,
          NAT, BGP, etc.)
        </p>
        <p className="desc">Understanding of the OWASP Top Ten</p>
        <p className="desc">Knowledge of the MVC framework</p>
        <p className="desc">
          Hands on development with ReactJS & Ruby on Rails
        </p>
        <p className="desc">
          Systems design knowledge, such as microservices, load balancing,
          scalability, sharding, etc.
        </p>
      </div>
    ),
  },

  {
    id: 5,
    title: "Relevant Courses",
    icon: "sources/online-course.png",
    information: (
      <div className="rightContainer">
        <p className="desc">
          <a
            href="https://catalog.uconn.edu/directory-of-courses/course/cse/#4705"
            className="courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artificial Intelligence
          </a>
        </p>
        <p className="desc">
          <a
            href="https://catalog.uconn.edu/directory-of-courses/course/math/#2210Q"
            className="courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Applied Linear Algebra
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
            href="https://catalog.uconn.edu/directory-of-courses/course/cse/#2500"
            className="courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Discrete Systems
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
            href="https://catalog.uconn.edu/directory-of-courses/course/cse/#4820"
            className="courses"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introduction to Machine Learning
          </a>
        </p>
      </div>
    ),
  },

  {
    id: 6,
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
