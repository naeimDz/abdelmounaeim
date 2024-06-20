
interface Service {
    title: string;
    description: string;
    icon: string; // Assuming icon is an icon component or path to an image
  }
  
  const services: Service[] = [
    {
      title: "UX / UI Design",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      icon: "airplay", // Replace with actual icon component or path
    },
    {
      title: "iOS App Design",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      icon: "aperture", // Replace with actual icon component or path
    },
    {
      title: "24 / 7 Support",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      icon: "watch", // Replace with actual icon component or path
    },
    // ... Add more services objects following the same structure
  ];
  
  export default function Services() {

    return (
      <section className="section bg-light" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title">
                <div className="titles">
                  <h4 className="title title-line text-uppercase mb-4 pb-4">
                    What Do I Offer?
                  </h4>
                  <span></span>
                </div>
                <p className="text-muted mx-auto para-desc mb-0">
                  Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
                </p>
              </div>
            </div>
          </div>
  
          <div className="row">
            {services.map((service) => (
              <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={service.title}>
                <div className="service-wrapper rounded position-relative text-center border border-footer p-4 pt-5 pb-5">
                  <div className="icon text-primary">
                    <i className="fea icon-md" data-feather={service.icon}></i>
                  </div>
                  <div className="content mt-4">
                    <h5 className="title">{service.title}</h5>
                    <p className="text-muted mt-3 mb-0">{service.description}</p>
                  </div>
                  <div className="big-icon">
                    <i className="fea icons" data-feather={service.icon}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  

  
  