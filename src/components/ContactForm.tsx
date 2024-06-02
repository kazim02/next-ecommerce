"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import styles from "./ContactForm.module.css";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .nonempty("Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .nonempty("Message is required"),
});

type FormData = z.infer<typeof schema>;

const formFields = [
  { id: "name", label: "Name", type: "text", validation: schema.shape.name },
  {
    id: "email",
    label: "Email",
    type: "email",
    validation: schema.shape.email,
  },
  { id: "phone", label: "Phone", type: "text", validation: schema.shape.phone },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    validation: schema.shape.message,
  },
];

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <h2 className="mb-4 text-center">Contact Us</h2>

      {formFields.map((field) => (
        <div className="mb-3" key={field.id}>
          <label htmlFor={field.id} className="form-label">
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id}
              className={`form-control ${
                errors[field.id as keyof FormData] ? "is-invalid" : ""
              }`}
              {...register(field.id as keyof FormData)}
            />
          ) : (
            <input
              id={field.id}
              type={field.type}
              className={`form-control ${
                errors[field.id as keyof FormData] ? "is-invalid" : ""
              }`}
              {...register(field.id as keyof FormData)}
            />
          )}
          {errors[field.id as keyof FormData] && (
            <div className="invalid-feedback">
              {
                (errors[field.id as keyof FormData] as { message: string })
                  .message
              }
            </div>
          )}
        </div>
      ))}

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
