import { Briefcase, Code, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-8 md:px-16 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {" "}
              Passionate Web Dev and Tech Creator
            </h3>

            <p className="text-muted-foreground">
              aokdfhaodksanlsdkansdlaknsdladknsaldknalsdknal
              alsjkdhaklsdhjalsdkalsdkalsdkalsdkjalsdkadls
              asldjnalsdkalsdkjalsdkajlsdkas
            </p>

            <p className="text-muted-foreground">
              aokdfhaodksanlsdkansdlaknsdladknsaldknalsdknal
              alsjkdhaklsdhjalsdkalsdkalsdkalsdkjalsdkadls
              asldjnalsdkalsdkjalsdkajlsdkas
            </p>

            <div className="flex flex-col md:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get in Touch
              </a>

              <a
                href="/JohnBenedictCandelaria_Resume.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                View full Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Creating Responsive web Applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Project Management</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
