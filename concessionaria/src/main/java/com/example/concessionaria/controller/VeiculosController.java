package com.example.concessionaria.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.concessionaria.entities.Veiculo;
import com.example.concessionaria.repository.VeiculoRepository;

@RestController
@RequestMapping("/veiculos")
@CrossOrigin
public class VeiculosController {
	@Autowired
	VeiculoRepository repo;
	
	@GetMapping()
	public ResponseEntity<List<Veiculo>> getVeiculos() {
		return ResponseEntity.status(HttpStatus.OK).body(repo.findAll());
	}
		
	@PostMapping()
	public ResponseEntity<Veiculo> inserirVeiculo(@RequestBody Veiculo veiculo) {
		Veiculo vc = repo.save(veiculo);
		return ResponseEntity.status(HttpStatus.CREATED).body(vc);
	}
	
	@PutMapping("/{idveiculo}")
	public ResponseEntity<Veiculo> alterarVeiculo(@PathVariable("idveiculo") Long idveiculo, 
			@RequestBody Veiculo veiculo) {
		Optional<Veiculo> opVeiculo = repo.findById(idveiculo);
		try {
			Veiculo vc = opVeiculo.get();		
		    vc.setModelo(veiculo.getModelo());
			vc.setMarca(veiculo.getMarca());
			vc.setPlaca(veiculo.getPlaca());
			repo.save(vc);
			return ResponseEntity.status(HttpStatus.OK).body(vc);
		}
		catch(Exception e) {
		   return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
		
	@GetMapping("/{id}")
	public ResponseEntity<Veiculo> getUmVeiculo(@PathVariable("id") long id) {
		Optional<Veiculo> opVeiculo = repo.findById(id);
		try {
			Veiculo vc = opVeiculo.get();		
			return ResponseEntity.status(HttpStatus.OK).body(vc);
		}
		catch(Exception e) {
		   return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Veiculo> excluirUmVeiculo(@PathVariable("id") long id) {
		Optional<Veiculo> opVeiculo = repo.findById(id);
		try {
			Veiculo vc = opVeiculo.get();	
			repo.delete(vc);
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		}
		catch(Exception e) {
		   return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
}