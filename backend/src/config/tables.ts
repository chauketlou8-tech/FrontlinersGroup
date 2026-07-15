import connectDB from "./db";
import { env } from "./env";

async function createTables() {
    const connection = connectDB(env.dbUrl!)

    // Admin table
    await connection.query(`create table if not exists admin(id serial primary key , name text not null, email text not null unique, password text not null, role text check(role in ('viewer', 'admin', 'super')))`);

    // Contact details table
    await connection.query(`create table if not exists contactDetails(id serial primary key, phone text not null, email text unique)`);

    // Student table
    await connection.query(`create table if not exists students(id serial primary key, name text not null, grade text check (grade in ('grade 10', 'grade 11', 'grade 12')), subjects text[], contactDetailsId int references contactDetails(id), createdAt timestamp default current_timestamp)`);

    // Sessions table
    await connection.query(`create table if not exists sessions(id serial primary key, user_id int not null , refresh_token text not null, expires_at date)`);

    // Enrollment table
    await connection.query(`create table if not exists enrollments(id serial primary key, studentId int references students(id), subjects text[], grade text check (grade in ('grade 10', 'grade 11', 'grade 12')))`)

    console.log("Tables created!");
}

void createTables();