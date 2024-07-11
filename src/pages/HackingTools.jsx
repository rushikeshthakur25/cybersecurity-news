import React from 'react';
import Footer from '../components/Footer';

const HackingTools = () => {
  const toolsData = [
    {
      title: 'Network Scanning Tools',
      tools: [
        { name: 'Nmap', description: 'Network mapper is an open-source utility for network exploration or security auditing.', downloadLink: 'https://nmap.org/' },
        { name: 'ZMap', description: 'Open-source network scanner that enables researchers to scan the entire Internet.', downloadLink: 'https://github.com/zmap/zmap' },
        { name: 'Masscan', description: 'TCP port scanner, spews SYN packets asynchronously, scanning entire Internet in under 6 minutes.', downloadLink: 'https://github.com/robertdavidgraham/masscan' },
        { name: 'Angry IP Scanner', description: 'Open-source network scanner designed to be fast and simple to use.', downloadLink: 'https://angryip.org/' },
        { name: 'Wireshark', description: 'Network protocol analyzer for Unix and Windows; see everything in your network.', downloadLink: 'https://www.wireshark.org/' }
      ]
    },
    {
      title: 'Vulnerability Scanning Tools',
      tools: [
        { name: 'OpenVAS', description: 'Free software for vulnerability scanning and management.', downloadLink: 'https://www.openvas.org/' },
        { name: 'Nessus', description: 'Commercial vulnerability scanner widely used for network security assessments.', downloadLink: 'https://www.tenable.com/products/nessus' },
        { name: 'QualysGuard', description: 'Cloud-based security and compliance solution that provides vulnerability management services.', downloadLink: 'https://www.qualys.com/' },
        { name: 'Retina CS', description: 'Vulnerability management software that enables you to find and fix vulnerabilities across your network.', downloadLink: 'https://www.beyondtrust.com/' },
        { name: 'Acunetix', description: 'Web vulnerability scanner that automatically checks web applications for vulnerabilities.', downloadLink: 'https://www.acunetix.com/' }
      ]
    },
    {
      title: 'Password Cracking Tools',
      tools: [
        { name: 'John the Ripper', description: 'Fast password cracker for Unix-like systems.', downloadLink: 'https://www.openwall.com/john/' },
        { name: 'Hashcat', description: 'World\'s fastest and most advanced password recovery utility.', downloadLink: 'https://hashcat.net/hashcat/' },
        { name: 'Hydra', description: 'Very fast network logon cracker which supports many different services.', downloadLink: 'https://github.com/vanhauser-thc/thc-hydra' },
        { name: 'Cain & Abel', description: 'Tool for recovering passwords on Microsoft Windows operating systems.', downloadLink: 'https://www.oxid.it/cain.html' },
        { name: 'Medusa', description: 'Password cracking tool for network authentication services.', downloadLink: 'http://foofus.net/goons/jmk/medusa/medusa.html' }
      ]
    },
    {
      title: 'Exploitation Tools',
      tools: [
        { name: 'Metasploit', description: 'Penetration testing framework that makes hacking simple.', downloadLink: 'https://www.metasploit.com/' },
        { name: 'ExploitDB', description: 'Archive of public exploits and corresponding vulnerable software.', downloadLink: 'https://www.exploit-db.com/' },
        { name: 'Armitage', description: 'Java-based GUI front-end for the Metasploit Framework.', downloadLink: 'http://www.fastandeasyhacking.com/' },
        { name: 'SQLMap', description: 'Automatic SQL injection and database takeover tool.', downloadLink: 'http://sqlmap.org/' },
        { name: 'BeEF', description: 'Browser exploitation framework focused on leveraging web browsers.', downloadLink: 'https://beefproject.com/' }
      ]
    },
    {
      title: 'Wireless Hacking Tools',
      tools: [
        { name: 'Aircrack-ng', description: 'Network software suite consisting of a detector, packet sniffer, WEP and WPA/WPA2-PSK cracker, and analysis tool for wireless LANs.', downloadLink: 'https://www.aircrack-ng.org/' },
        { name: 'Kismet', description: 'Wireless network detector, sniffer, and intrusion detection system for 802.11 wireless LANs.', downloadLink: 'https://www.kismetwireless.net/' },
        { name: 'Reaver', description: 'Implements a brute force attack against Wifi Protected Setup (WPS) registrar PINs in order to recover WPA/WPA2 passphrases.', downloadLink: 'https://github.com/t6x/reaver-wps-fork-t6x' },
        { name: 'Fern Wifi Cracker', description: 'Wireless security auditing and attack software program written using the Python Programming Language.', downloadLink: 'https://github.com/savio-code/fern-wifi-cracker' },
        { name: 'Wifite', description: 'Python script for auditing wireless networks.', downloadLink: 'https://github.com/derv82/wifite' }
      ]
    },
    {
      title: 'Web Application Hacking Tools',
      tools: [
        { name: 'Burp Suite', description: 'Integrated platform for performing security testing of web applications.', downloadLink: 'https://portswigger.net/burp' },
        { name: 'OWASP ZAP', description: 'Free and open-source web application security scanner.', downloadLink: 'https://www.zaproxy.org/' },
        { name: 'SQLMap', description: 'Automatic SQL injection and database takeover tool.', downloadLink: 'http://sqlmap.org/' },
        { name: 'Nikto', description: 'Web server scanner that tests web servers for known vulnerabilities, misconfigurations, and outdated software.', downloadLink: 'https://cirt.net/Nikto2' },
        { name: 'XSStrike', description: 'Advanced XSS detection suite.', downloadLink: 'https://github.com/s0md3v/XSStrike' }
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-black">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">Hacking Tools</h1>

      {/* Render each section */}
      {toolsData.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.tools.map((tool, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-white mb-2">{tool.name}</h3>
                <p className="text-gray-200 mb-4">{tool.description}</p>
                <a
                  href={tool.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-blue-500 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Footer/>
    </div>
  );
};

export default HackingTools;
