import '../styles/collegeHeader.css';

export default function CollegeHeader() {
  return (
    <header className="college-header" role="banner" aria-label="College Header">
      <div className="college-header__inner">
        {/* Left: Institute Crest Logo */}
        <div className="college-header__logo-col college-header__logo-col--left">
          <img
            src="/college-logo.png"
            alt="Prof. Ram Meghe Institute of Technology and Research Emblem"
            className="college-header__logo"
            onError={(e) => {
              e.currentTarget.src = 'https://mitra.ac.in/images/logo1%20-%20Copy%201.png';
            }}
          />
        </div>

        {/* Center: Official College Identity & Accreditation */}
        <div className="college-header__text-col">
          <p className="college-header__society">
            Vidarbha Youth Welfare Society's
          </p>
          <h1 className="college-header__title">
            Prof. Ram Meghe Institute of Technology and Research
          </h1>
          <h2 className="college-header__location">
            Badnera - Amravati 444701(MS)
          </h2>
          <p className="college-header__former">
            (Formerly College of Engineering, Badnera) - Estd. 1983
          </p>
          <p className="college-header__autonomous">
            An Autonomous Institute
          </p>
          <p className="college-header__affiliation">
            (Affiliated to Sant Gadge Baba Amravati University)
          </p>
        </div>

        {/* Right: NAAC Accreditation Badge */}
        <div className="college-header__logo-col college-header__logo-col--right">
          <img
            src="/naac-logo.png"
            alt="NAAC A+ Grade Accreditation"
            className="college-header__naac-logo"
            onError={(e) => {
              e.currentTarget.src = 'https://mitra.ac.in/images/logo2%20-%20Copy%202.png';
            }}
          />
          <div className="college-header__cgpa">CGPA 3.43</div>
        </div>
      </div>
    </header>
  );
}
