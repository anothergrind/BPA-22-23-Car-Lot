import React from "react";
import { Button } from "react-router-dom";
import Form from "react-bootstrap";
import Stack from "react-bootstrap";
import "/src/styles/sections.css";

export default function SectionThree() {
  return (
    <div className="container" id="section_two">
      <h1>Start Shopping</h1>
      <Form>
        <Stack direction="horizontal" gap={2}>
          <p>Search</p>
          <Button as="a" variant="primary" to="/explore">
            Search
          </Button>
        </Stack>
      </Form>
    </div>
  );
}
