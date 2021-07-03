export const data = [
    {
        id: 1,
        title: "Education",
        icon: 'sources/mortarboard.png',
        description: 'University of Connecticut',
        information: <div className="rightContainer">
            <p className="desc">Expected B.S. in May 2022</p>
            <p className="desc">Major in Computer Science</p>
            <p className="desc">Minor in Mathematics</p>
            <h3>Certifications</h3>
            <p className="desc indent">CompTIA Security+ <span>(expected in August 2021)</span></p>
            <p className="desc indent">CCNA <span>(expected in January 2022)</span></p>
        </div>
    },
    {
      id: 2,
      title: 'Work Experience',
      icon: 'sources/portfolio.png',
      description: "Cisco Meraki",
      extra: 'Software QA Engineer Intern',
      information: <div className="rightContainer">
                    <p className="desc">Created a project using Ruby on Rails</p>
                    <p className="desc">Utilized the Jenkins API to retrieve test information</p>
                    <p className="desc">Formulated solutions to problems using Ruby scripts</p>
                    <p className="desc">Used Jira for bug and progress tracking</p>
                    <p className="desc">Used Git for version control</p>
                    <p className="desc">
                      Connected an external PostgreSQL database and configured a
                      MongoDB locally on a VM
                    </p>
                    <p className="desc">
                      Incorporated Cron to schedule a script that periodically
                      updates a local MongoDB instance
                    </p>
                    <p className="desc">Learned about container technology like Docker</p></div>
      },
    {
      id: 3,
      title: 'Technical Skills',
      icon: 'sources/pencil.png',
      information: <div className="rightContainer">

          <p className="desc">Strong understanding of Windows and Unix environments</p>
          <p className="desc">Knowledge of ReactJS</p>
          <p className="desc">Understanding of the OWASP Top Ten and how to exploit vulnerabilities associated with them</p>
          <p className="desc">Deep understanding of networking concepts such as the TCP/IP model, DNS, DHCP, NAT, BGP, etc.</p>
          <p className="desc">Network troubleshooting</p>
          <p className="desc">Hands on experience with tools such as Wireshark, Nmap, Metasploit, Burp Suite, GDB, etc.</p>
          <p className="desc">Experience deploying AWS instances, configuring security groups, and resizing instances</p>
          <p className="desc">Knowledge of the MVC framework</p>
      </div>
      },
    
    {
        id: 4,
        title: 'Relevant Courses',
        icon: 'sources/online-course.png',
        information: <div className="rightContainer">
          <p className="desc">Cybersecurity Lab</p>
          <p className="desc">Networks</p>
          <p className="desc">Operating Systems</p>
          <p className="desc">Introduction to Computer and Network Security</p>
          <p className="desc">Algorithms & Complexity</p>
          <p className="desc">Architecture of IoT</p>
        </div>
      },
    
    {
      id: 5,
      title: 'Clubs & Activities',
      icon: 'sources/network.png',
      information: <div className="rightContainer">
        <p className="desc">UConn B.R.O.S. <span>(2019 - present)</span></p>
        <p className="desc">UConn A.C.M <span>(2019 - present)</span></p>
        <p className="desc">N.S.B.E <span>(2019 - 2020)</span></p>
        <p className="desc">Intramural Volleyball</p>
        <p className="desc">Intramural Basketball</p>
      </div>
    }
    
    ]