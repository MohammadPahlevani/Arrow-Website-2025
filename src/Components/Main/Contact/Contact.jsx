import React from "react";
import Call from "./Call";

export default function Contact() {
  return (
    <div className="grid items-center md:grid-cols-2">
      <Call></Call>
      <div className="h-full bg-center bg-cover bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12955.938200275164!2d51.508234495277456!3d35.726598491611824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfa!2s!4v1743929788976!5m2!1sfa!2s"
          width="100%"
          height="100%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
