import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

const books = [
  { id: 1, title: "Book 1", cover: "/book1.jpg" },
  { id: 2, title: "Book 2", cover: "/book2.jpg" },
  { id: 3, title: "Book 3", cover: "/book3.jpg" },
  { id: 4, title: "Book 4", cover: "/book4.jpg" },
  { id: 5, title: "Book 5", cover: "/book5.jpg" },
  { id: 6, title: "Book 6", cover: "/book6.jpg" },
];

const BookGrid = () => {
  return (
    <Grid container spacing={3}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4} key={book.id}>
          <Card sx={{ textAlign: "center", padding: 2 }}>
            <img src={book.cover} alt={book.title} width="100" />
            <CardContent>
              <Typography variant="h6">{book.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookGrid;
