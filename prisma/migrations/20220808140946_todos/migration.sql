-- CreateTable
CREATE TABLE "todos" (
    "uuid" UUID NOT NULL,
    "owner_uuid" UUID NOT NULL,
    "state" VARCHAR(20) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE INDEX "todos_owner_uuid_state_idx" ON "todos"("owner_uuid", "state");
