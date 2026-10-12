import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import type { TemplateEntry } from "./registry";

interface ConsultationEnquiryProps {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  propertyType?: string;
  approximateArea?: number;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

function ConsultationEnquiry({
  name = "Website visitor",
  email = "Not provided",
  phone = "Not provided",
  city = "Not provided",
  propertyType = "Not provided",
  approximateArea,
  projectType = "Not provided",
  budget = "Not provided",
  timeline = "Not provided",
  message = "No additional details provided.",
}: ConsultationEnquiryProps) {
  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "Not provided"],
    ["City", city],
    ["Property type", propertyType],
    ["Approximate area", approximateArea ? `${approximateArea} sq ft` : "Not provided"],
    ["Project type", projectType],
    ["Budget", budget],
    ["Preferred timeline", timeline],
  ];

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>New consultation request from {name}</Preview>
      <Body style={body}>
        <Container style={container}>
          <Text style={eyebrow}>DIMENSIONS DESIGNS INTERIOR</Text>
          <Heading style={heading}>New consultation enquiry</Heading>
          <Text style={intro}>A visitor submitted the consultation form on iddimensions.com.</Text>
          <Section style={details}>
            {rows.map(([label, value]) => (
              <Section key={label} style={row}>
                <Text style={labelStyle}>{label}</Text>
                <Text style={valueStyle}>{value}</Text>
              </Section>
            ))}
          </Section>
          <Hr style={rule} />
          <Text style={labelStyle}>Project details</Text>
          <Text style={messageStyle}>{message || "No additional details provided."}</Text>
          <Text style={footer}>Reply directly to this email to contact {name}.</Text>
        </Container>
      </Body>
    </Html>
  );
}

export const template = {
  component: ConsultationEnquiry,
  subject: (data) => `New consultation enquiry — ${String(data["name"] || "Website visitor")}`,
  displayName: "Consultation enquiry",
  to: "info@iddimensions.com",
  previewData: {
    name: "Aarav Sharma",
    email: "aarav@example.com",
    phone: "+91 98765 43210",
    projectType: "Modular Kitchen",
    budget: "₹15 – 30 Lakhs",
    timeline: "1 – 3 months",
    message: "We are renovating our home in Golf City, Lucknow and would like to discuss the kitchen and living areas.",
  },
} satisfies TemplateEntry;

const body = { backgroundColor: "#ffffff", color: "#25231f", fontFamily: "Arial, Helvetica, sans-serif", margin: "0", padding: "32px 12px" };
const container = { border: "1px solid #d8d2c7", margin: "0 auto", maxWidth: "600px", padding: "36px" };
const eyebrow = { color: "#9a7440", fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", margin: "0 0 12px" };
const heading = { color: "#25231f", fontFamily: "Georgia, serif", fontSize: "32px", fontWeight: "400", lineHeight: "1.15", margin: "0 0 14px" };
const intro = { color: "#656158", fontSize: "15px", lineHeight: "1.6", margin: "0 0 28px" };
const details = { backgroundColor: "#f7f5f0", padding: "8px 20px" };
const row = { borderBottom: "1px solid #e5e0d7", padding: "11px 0" };
const labelStyle = { color: "#777168", fontSize: "11px", fontWeight: "700", letterSpacing: "0.7px", margin: "0 0 4px", textTransform: "uppercase" as const };
const valueStyle = { color: "#25231f", fontSize: "15px", lineHeight: "1.45", margin: "0" };
const rule = { borderColor: "#d8d2c7", margin: "28px 0" };
const messageStyle = { color: "#25231f", fontSize: "15px", lineHeight: "1.65", margin: "8px 0 0", whiteSpace: "pre-wrap" as const };
const footer = { color: "#777168", fontSize: "12px", lineHeight: "1.5", margin: "32px 0 0" };