import { Request, Response } from 'express';
import { prisma } from '../index';

export const getAllProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { updatedAt: 'desc' }
    });
    
    return res.json(projects);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar projetos' });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const project = await prisma.project.findUnique({
      where: { id: Number(id) }
    });
    
    if (!project) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    
    return res.json(project);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar projeto' });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, description, imageUrl, link, tags, featured } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ error: 'Título e descrição são obrigatórios' });
    }
    
    const project = await prisma.project.create({
      data: {
        title,
        description,
        imageUrl,
        link,
        tags,
        featured: featured || false
      }
    });
    
    return res.status(201).json(project);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar projeto' });
  }
};

export const updateProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, imageUrl, link, tags, featured } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ error: 'Título e descrição são obrigatórios' });
    }
    
    const projectExists = await prisma.project.findUnique({
      where: { id: Number(id) }
    });
    
    if (!projectExists) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    
    const project = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        imageUrl,
        link,
        tags,
        featured: featured || false
      }
    });
    
    return res.json(project);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar projeto' });
  }
};

export const deleteProject = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const projectExists = await prisma.project.findUnique({
      where: { id: Number(id) }
    });
    
    if (!projectExists) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    
    await prisma.project.delete({
      where: { id: Number(id) }
    });
    
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao excluir projeto' });
  }
};

export const getFeaturedProjects = async (req: Request, res: Response) => {
  try {
    const projects = await prisma.project.findMany({
      where: { featured: true },
      orderBy: { updatedAt: 'desc' }
    });
    
    return res.json(projects);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao buscar projetos destacados' });
  }
};