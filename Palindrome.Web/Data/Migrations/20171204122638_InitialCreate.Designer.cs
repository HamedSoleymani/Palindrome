﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using Palindrome.DataAccess;
using System;

namespace Palindrome.Web.Migrations
{
    [DbContext(typeof(PalindromeContext))]
    [Migration("20171204122638_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Palindrome.DataAccess.Entities.PersistedEntry", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Entry");

                    b.HasKey("Id");

                    b.ToTable("PersistedEntries");
                });
#pragma warning restore 612, 618
        }
    }
}
