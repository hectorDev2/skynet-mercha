import React from "react";

export const About = ({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image: string;
}) => {
  return (
    <section id="about" className="container mx-auto py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={`${image}`}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
              <p className="text-xl text-muted-foreground mt-4">{content}</p>
            </div>
            <section id="statistics">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold ">2.7K+</h2>
                  <p className="text-xl text-muted-foreground">Users</p>
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold ">1.8K+</h2>
                  <p className="text-xl text-muted-foreground">Subscribers</p>
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold ">112</h2>
                  <p className="text-xl text-muted-foreground">Downloads</p>
                </div>
                <div className="space-y-2 text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold ">10</h2>
                  <p className="text-xl text-muted-foreground">Proyectos</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
