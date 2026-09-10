import "./contact.css";

const contactFields = [
  {
    label: "email :",
    type: "email",
    placeholder: "jayendraawasthi06@gmail.com",
    className: "contact__input",
  },
  {
    label: "subject :",
    type: "text",
    placeholder: "let’s have a coffee",
    className: "contact__input",
  },
  {
    label: "content :",
    placeholder: "and spoil some attack on titan’s episodes",
    className: "contact__textarea",
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">contact me</h2>

      <form className="contact__form">
        {contactFields.map((field, index) => (
          <div
            className="contact__group"
            key={field.label}
            style={{ "--delay": `${index * 0.2}s` }}
          >
            <label className="contact__label">{field.label}</label>

            {field.className === "contact__textarea" ? (
              <textarea
                className={field.className}
                placeholder={field.placeholder}
                rows="10"
              />
            ) : (
              <input
                type={field.type}
                className={field.className}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </form>
    </section>
  );
}

export default Contact;
